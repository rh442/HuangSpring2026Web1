function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let lifted = false;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();

        



        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('Pika1'));
dragElement(document.getElementById('Pika2'));
dragElement(document.getElementById('Pika3'));
dragElement(document.getElementById('Pika4'));
dragElement(document.getElementById('Pika5'));
dragElement(document.getElementById('Pika6'));
dragElement(document.getElementById('Pika7'));
dragElement(document.getElementById('Pika8'));
dragElement(document.getElementById('Pika9'));
dragElement(document.getElementById('Pika10'));
dragElement(document.getElementById('Pika11'));
dragElement(document.getElementById('Pika12'));
dragElement(document.getElementById('Pika13'));
dragElement(document.getElementById('Pika14'));
dragElement(document.getElementById('Pika15'));
dragElement(document.getElementById('Pika16'));