const init = (function() {
    const nameModal = new bootstrap.Modal('#namePreview');      // modal reference
    const NAME_LIST_COUNT = 24;                                 // Number of names to generate

    // called by ship name buttons to open preview modal
    window.previewName = (shipName) => {
        document.getElementById('titleShipName').innerHTML = shipName;
        document.getElementById('shipName').innerHTML = shipName;
        addPrefix();
        nameModal.show();
    }

    // get word from a specific word group in the library [adjectives, nouns]
    getWord = (group, isMonth) => {
        let index = isMonth
            ? Math.floor(Math.random() * (library[group].length - 12)) + 12     // skip months
            : Math.floor(Math.random() * library[group].length);
        return library[group][index];
    }

    // grab a unique word that is not a repeat of given parameter
    getUniqueNoun = (shipName, isMonth) => {
        let uniqueNoun = getWord('nouns', isMonth);
        while(uniqueNoun === shipName) {
            uniqueNoun = getWord('nouns', isMonth);
        }
        
        return uniqueNoun;
    }

    // give a 1 in 4 chance of generating a longer name
    generateLongNameChance = (shipName) => {
        let randSecondary = Math.floor(Math.random() * 4);
        if(randSecondary) {
            // check if shipName is a month
            let months = library.nouns.slice(0,12);
            let isMonth = months.find(el => el === shipName);

            // choose to add 'of' in between name
            if(Math.floor(Math.random() * 2)) {
                let secondNoun = getUniqueNoun(shipName, isMonth);
                
                // if primary ship name is month, set order accordingly
                shipName = isMonth
                    ? `${secondNoun} of ${shipName}`
                    : `${shipName} of ${secondNoun}`;
            }
            // prepend a noun or adjective
            else {
                let randNoun = Math.floor(Math.random() * 2);
                let word = randNoun
                    ? getUniqueNoun(shipName, isMonth)
                    : getWord('adjectives');

                // if primary ship name is month, set order accordingly
                shipName = randNoun && isMonth
                    ? `${shipName} ${word}`
                    : `${word} ${shipName}`;
            }
        }

        return shipName;
    }

    // generate a list of ship names
    generateNames = () => {
        let shipNames = [];
        let i = 0;
        
        while(i<NAME_LIST_COUNT) {
            let shipName = getWord('nouns');
            shipName = generateLongNameChance(shipName);
            
            // make sure there are no repeats
            const found = shipNames.find(el => el == shipName);
            if(!found) {
                shipNames.push(shipName);
                i++;
            }
        }
        
        displayNames(shipNames);
    }

    // Display names to nameList
    displayNames = (shipNames) => {
        let display = '';
        shipNames.map((shipName) => {
            display +=
                `<div class="col">
                    <button class="btn btn-name w-100 text-black fw-bold" onclick="previewName('${shipName}');">${shipName}</button>
                </div>`;
        });

        document.getElementById('nameList').innerHTML = display;
    }

    // inverts preview window colour
    invertHullColour = (invert) => {
        let shipHull = document.getElementById('starshipHull');
        let shipName = document.getElementById('shipName');

        if(invert) {
            shipHull.style.backgroundImage = 'url("img/SpaceshipHullDark.jpg")';
            shipName.classList.remove('text-black');
        }
        else {
            shipHull.style.backgroundImage = 'url("img/SpaceshipHull.jpg")';
            shipName.classList.add('text-black');
        }
    }

    // add prefix to ship name
    addPrefix = (e) => {
        let prefix = typeof e === 'undefined'
            ? document.getElementById('txtPrefix').value
            : e.target.value;

        let shipName = document.getElementById('titleShipName').innerHTML;
        document.getElementById('shipName').innerHTML = `${prefix} ${shipName}`;
    }

    // clears the prefix input field
    clearPrefix = () => {
        document.getElementById('txtPrefix').value = "";
        addPrefix();
    }

    // listeners
    document.getElementById('generateBtn').addEventListener('click', generateNames);
    document.getElementById('txtPrefix').addEventListener('input', addPrefix);
    document.getElementById('clearPrefix').addEventListener('click', clearPrefix);
    
    let invertCheckbox = document.getElementById('chkInvert');
    invertCheckbox.checked = false;
    invertCheckbox.addEventListener('change', () => {
        invertHullColour(invertCheckbox.checked);
    });
    
    // initialize
    generateNames();
});
