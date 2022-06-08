const init = (function() {
    const nameModal = new bootstrap.Modal('#namePreview');

    // called by ship name buttons to open preview modal
    window.previewName = (shipName) => {
        document.getElementById('titleShipName').innerHTML = shipName;
        document.getElementById('shipName').innerHTML = shipName;
        addPrefix();
        nameModal.show();
    }

    // get word from a specific word group in the library [adjectives, nouns]
    getWord = (group) => {
        let index = Math.floor(Math.random() * library[group].length);
        return library[group][index];
    }

    // grab a unique word that is not a repeat of given parameter
    getUniqueNoun = (shipName) => {
        let uniqueNoun = getWord('nouns');
        while(uniqueNoun === shipName) {
            uniqueNoun = getWord('nouns');
        }
        return uniqueNoun;
    }

    generateNames = () => {
        let shipNames = [];
        for(let i=0; i<16; i++) {
            let randSecondary = Math.floor(Math.random() * 2);
            let shipName = getWord('nouns');
            
            // generate a longer name (add an adjective or noun)
            if(randSecondary) {
                // choose to add 'of' in between name
                if(Math.floor(Math.random() * 2)) {
                    let secondNoun = getUniqueNoun(shipName);
                    shipName = `${shipName} of ${secondNoun}`;
                }
                else {
                    // use a noun or adjective
                    let randNoun = Math.floor(Math.random() * 2);

                    let word = randNoun
                        ? getUniqueNoun(shipName)
                        : getWord('adjectives');

                    shipName = `${word} ${shipName}`;
                }
            }
            
            // make sure there are no repeats
            const found = shipNames.find(el => el == shipName);
            found ? i-- : shipNames.push(shipName);
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
