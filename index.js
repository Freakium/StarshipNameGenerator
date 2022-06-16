const init = (function() {
    const nameModal = new bootstrap.Modal('#namePreview');      // modal reference
    const NAME_LIST_COUNT = 24;                                 // Number of names to generate
    const LONG_NAME_CHANCE = 0.8;                               // chance of generating longer name
    const TIMEOUT_DURATION = 3000;                              // show message time in milliseconds

    // GLOBAL FUNCTIONS
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    // called by ship name buttons to open preview modal
    window.previewName = (id) => {
        let shipName = document.getElementById(id).innerHTML;
        decipherShipName(shipName);

        document.getElementById('namePreview').setAttribute('data-nameid', id);
        nameModal.show();
    }

    // Name Generation
    ///////////////////////////////////////////////////////////////////////////////////////////

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
        if(Math.random() < LONG_NAME_CHANCE) {
            // check if shipName is a month
            let months = library.nouns.slice(0,12);
            let isMonth = months.find(el => el === shipName);

            // prepend a noun or adjective
            let randNoun = Math.floor(Math.random() * 2);
            let word = randNoun
                ? getUniqueNoun(shipName, isMonth)
                : getWord('adjectives');

            // if primary ship name is month, set order accordingly
            shipName = randNoun && isMonth
                ? `${shipName} ${word}`
                : `${word} ${shipName}`;
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
        shipNames.map((shipName, index) => {
            display +=
                `<div class="col">
                    <button class="btn btn-name w-100 text-black fw-bold" id="name${index}" onclick="previewName(this.id);">${shipName}</button>
                </div>`;
        });

        document.getElementById('nameList').innerHTML = display;
    }

    // splits ship name into [Affix, Preposition, Primary] and displays it in the preview modal
    decipherShipName = (shipName) => {
        let names = shipName.split(' ');

        // add primary name
        document.getElementById('shipPrimary').innerHTML = names.pop();

        // add affix
        document.getElementById('shipAffix').innerHTML = names.length
            ? names.shift()
            : '';

        // add preposition
        document.getElementById('txtPreposition').value = names.length
            ? names.join()
            : '';
        addPreposition();
    }

    // USER INTERACTION
    ///////////////////////////////////////////////////////////////////////////////////////////

    // add prefix to ship name
    addPrefix = (e) => {
        let prefix = typeof e === 'undefined'
            ? document.getElementById('txtPrefix').value
            : e.target.value;

        document.getElementById('shipPrefix').innerHTML = prefix;
    }

    // clears the prefix input field
    clearPrefix = () => {
        document.getElementById('txtPrefix').value = "";
        addPrefix();
    }

    // add preposition to ship name
    addPreposition = (e) => {
        let preposition = typeof e === 'undefined'
            ? document.getElementById('txtPreposition').value
            : e.target.value;

        document.getElementById('shipPreposition').innerHTML = preposition;
    }

    // clears the preposition input field
    clearPreposition = () => {
        document.getElementById('txtPreposition').value = "";
        addPreposition();
    }

    // toggles hull and ship name colour
    toggleHullColour = (invert) => {
        let button = document.getElementById('btnInvert');
        let shipHull = document.getElementById('starshipHull');
        let shipName = document.getElementById('shipName');

        if(invert) {
            shipHull.style.backgroundImage = 'url("img/StarshipHull.jpg")';
            shipName.classList.add('text-black');
            button.removeAttribute('data-dark');
        }
        else {
            shipHull.style.backgroundImage = 'url("img/StarshipHullDark.jpg")';
            shipName.classList.remove('text-black');
            button.setAttribute('data-dark', true);
        }
    }

    // swaps the primary and affix ship names
    swapNamePosition = () => {
        let primary = document.getElementById('shipPrimary');
        let affix = document.getElementById('shipAffix');
        let newPrimary = affix.innerHTML;
        let newAffix = primary.innerHTML;
        
        primary.innerHTML = newPrimary;
        affix.innerHTML = newAffix;
    }

    // copy the ship name to the clipboard
    copyNameToClipboard = () => {
        let fullName = document.getElementById('shipPrimary').innerHTML;
        let preposition = document.getElementById('shipPreposition').innerHTML;
        let affix = document.getElementById('shipAffix').innerHTML;
        let prefix = document.getElementById('shipPrefix').innerHTML;

        let wordList = [preposition, affix, prefix];
        wordList.map(word => (fullName = word !== '' ? `${word} ${fullName}` : fullName));

        // save using secure method
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(fullName.toLocaleUpperCase());
        }
        // save using 'I'm too poor for SSL' method
        else {
            let textBox = document.getElementById('txtCopy');
            textBox.value = fullName.toLocaleUpperCase();
            textBox.focus();
            textBox.select();
            document.execCommand('copy');
        }

        // display success message and disable button for set duration
        let copyBtn = document.getElementById('btnCopy');
        copyBtn.innerHTML = 'Name Copied!';
        copyBtn.setAttribute('disabled', true);
        setTimeout(() => {
            copyBtn.innerHTML = 'Copy';
            copyBtn.removeAttribute('disabled');
        }, TIMEOUT_DURATION);
    }

    // check whether or not to hide the swap button
    swapButtonHideCheck = () => {
        let swapBtn = document.getElementById('btnSwap');
        let affix = document.getElementById('shipAffix').innerHTML;

        affix
            ? swapBtn.classList.remove('d-none')
            : swapBtn.classList.add('d-none');
    }

    // TODO: add carousel for preview window

    // INIT
    ///////////////////////////////////////////////////////////////////////////////////////////

    // listeners
    document.getElementById('generateBtn').addEventListener('click', generateNames);
    document.getElementById('txtPrefix').addEventListener('input', addPrefix);
    document.getElementById('clearPrefix').addEventListener('click', clearPrefix);
    document.getElementById('txtPreposition').addEventListener('input', addPreposition);
    document.getElementById('clearPreposition').addEventListener('click', clearPreposition);
    
    // toggle hull colour button
    const invertCheckbox = document.getElementById('btnInvert');
    invertCheckbox.addEventListener('click', () => {
        toggleHullColour(invertCheckbox.dataset.dark);
    });
    
    // swap name position button
    const swapPosition = document.getElementById('btnSwap');
    swapPosition.addEventListener('click', () => {
        swapNamePosition();
    });
    
    // copy name button
    const copyName = document.getElementById('btnCopy');
    copyName.addEventListener('click', () => {
        copyNameToClipboard();
    });

    // run on modal open
    const showModal = document.getElementById('namePreview');
    showModal.addEventListener('show.bs.modal', () => {
        addPrefix();
        swapButtonHideCheck();
    });
    
    // initialize
    generateNames();
});
