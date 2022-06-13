const FREQUENCY_NEW_WORD_MS = 200;

let currentLineIndex = 0;
let columnsInLine = 0;
let currentIndentationLevel = 0;

const onDomLoaded = () => {
    const codeBox = document.getElementById('code-section');
    window.interval = setInterval(() => {
        const codeLine = document.querySelector('.code-line:last-child');
        const newSpan = document.createElement('span');

        if (Math.random() > 0.5) {
            newSpan.classList.add('code-item', 'blue');   
        } else {
            newSpan.classList.add('code-item', 'grey');    
        }

        // Chance of a new line
        if (columnsInLine > 13 || ((columnsInLine - currentIndentationLevel) > 0 &&  Math.random() > 0.5)) {
            const newLine = document.createElement('div');
            newLine.classList.add('code-line');
            codeBox.appendChild(newLine);

            if (Math.random() > 0.6) {
                // 40% chance of keeping same indentation level
            }
            else if (Math.random() > 0.4) {
                // 20% chance of increasing indent
                if (currentIndentationLevel < 4) currentIndentationLevel++;
            } 
            else if (Math.random() > 0.2) {
                // 20% chance of reducing indent
                if (currentIndentationLevel > 0) currentIndentationLevel--;
            } 
            else {
                // 20% chance of clearing indent
                currentIndentationLevel = 0;
            }

            for(let i = 0; i < currentIndentationLevel; i++) {
                const newSpan = document.createElement('span');
                newSpan.classList.add('code-item', 'invisible', 'size-1-no-anim');
                newLine.appendChild(newSpan);
            }


            columnsInLine = currentIndentationLevel;
            currentLineIndex++;
            if (currentLineIndex > 14) {
                const firstCodeLine = document.querySelector('.code-line:first-child');
                codeBox.removeChild(firstCodeLine);
            }
        } else {
            const random = Math.random();
            if (random <= 0.33) {
                newSpan.classList.add('size-1')
                columnsInLine += 1;
            } else if (random <= 0.66) {
                newSpan.classList.add('size-2')
                columnsInLine += 2;
            } else {
                newSpan.classList.add('size-3')
                columnsInLine += 3;
            }


            codeLine.appendChild(newSpan);
        }
    }, FREQUENCY_NEW_WORD_MS);
};

document.addEventListener('DOMContentLoaded', onDomLoaded);