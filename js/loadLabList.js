const loadLabList = async (currentLab) => {
    const labCount = 9;

    const labList = document.getElementById("lablist");

    for (let labNumber = 1; labNumber <= labCount; labNumber++) {
        const labLink = document.createElement('a');
        labLink.href = `../../lab${labNumber}/pages/index-1.html`;
        labLink.textContent = `Практична №${labNumber}`;
        labLink.classList.add('link');

        const labLinkWrapper = document.createElement('div');
        labLinkWrapper.classList.add('wrapper', 'link');

        try {
            const response = await fetch(labLink.href, { method: 'HEAD' });
            if (!response.ok) {
                labLinkWrapper.classList.add('not-found');
                labLink.style.pointerEvents = 'none';
            }
        } catch (error) {
            labLinkWrapper.classList.add('not-found');
            labLink.style.pointerEvents = 'none';
        }

        if (labNumber === currentLab) {
            labLinkWrapper.classList.add('active');
        }

        labLinkWrapper.appendChild(labLink);
        labList.appendChild(labLinkWrapper);
    }
}
