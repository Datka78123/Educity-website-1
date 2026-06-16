const line1 = document.querySelector(".line1"); 
const line2 = document.querySelector(".line2"); 
const line3 = document.querySelector(".line3");

const animateArrow = document.querySelectorAll(".arrow")
const animateBtn = document.querySelectorAll(".btn-arrow")
const animateBtns = document.querySelectorAll(".btn-arrow");


const element = {
    title: 'Write a attractive hero title for the following website <span> https://zeltalabs.com/ </span>',
    img: './resources/icons/mdi_arrow-up.svg'
}

const features = [
    {
        title: "Write mails and replies",
        text: "Generate professional emails, responses, and business communications in seconds."
    },
    {
        title: "Read PDF and attachments",
        text: "Analyze PDF files, documents, and attachments to extract important information quickly."
    },
    {
        title: "Scan images",
        text: "Understand text, objects, and visual content from images with advanced AI analysis."
    },
    {
        title: "Write codes & programs",
        text: "Generate code, debug errors, and build applications across multiple programming languages."
    },
    {
        title: "Research",
        text: "Gather information, summarize topics, and provide insights from complex sources."
    },
    {
        title: "Automation",
        text: "Automate repetitive tasks, workflows, and processes to improve productivity."
    }
];

const createElement = (elementwrapper) => {
    const carouselElement = document.createElement("div");
    carouselElement.classList.add("carousel-element");
    carouselElement.innerHTML = `
        <h2>${element.title}</h2>
        <img src="${element.img}" alt="arrow up" />
    `;
    elementwrapper.appendChild(carouselElement);
}

const fillElement = (wrapper, count, duplicate = 2) => {
    for (let d = 0; d < duplicate; d++) {
        for (let i = 0; i < count; i++) {
            createElement(wrapper);
        }
    }
};

const createFeature = (feature) => {
    const card = document.createElement('div');
    const title1 = document.createElement('h2');
    const sub1 = document.createElement('p');

    card.classList.add('feature');
    title1.classList.add('feature-title');
    sub1.classList.add('feature-sub');

    title1.textContent = feature.title;
    sub1.textContent = feature.text;

    card.appendChild(title1);
    card.appendChild(sub1);

    return card;
};

const featuresContainer = document.querySelector('.features-cont');
features.forEach(feature => {
    featuresContainer.appendChild(createFeature(feature));
});

fillElement(line1, 3);
fillElement(line2, 3);
fillElement(line3, 3);


animateBtns.forEach(btn => {
    const arrow = btn.querySelector(".arrow");   
    
    if (!arrow) return;

    btn.addEventListener('mouseenter', () => {
        arrow.style.transform = "translateX(10px)";
        arrow.style.opacity = "1";
    });

    btn.addEventListener('mouseleave', () => {
        arrow.style.transform = "translateX(55px)";
        arrow.style.opacity = "0";
    });
});
