const loadLabList = async (currentLab) => {
    const labIndexes = [1,2,31,32,4,5,6,7,8,9];

    const labList = document.getElementById("lablist");

    for (const labNumber of labIndexes) {
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
