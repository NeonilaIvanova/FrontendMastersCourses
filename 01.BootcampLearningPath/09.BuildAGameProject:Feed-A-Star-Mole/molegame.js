let score = 0;

function getSadInterval() {
    return Date.now() + 1000;
}

function getGoneInterval() {
    return Date.now() + Math.floor(Math.random() * 3000) + 2000;
}

function getHungryInterval () {
    return Date.now() + Math.floor(Math.random() * 3000) + 2000;
}

const moles = [
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-0')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-1')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-2')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-3')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-4')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-5')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-6')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-7')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-8')
    },
    {
        status: "sad",
        next: getSadInterval(),
        king: false,
        node: document.getElementById('hole-9')
    },
]

function getNextStatus (mole) {
    switch (mole.status) {
        case "sad":
        case "fed":
            mole.next = getSadInterval();
            mole.status = "leaving";
            mole.node.children[0].src = './img/mole-leaving.png';
            break;
        case "leaving":
            mole.next = getGoneInterval();
            mole.status = 'gone';
            mole.node.children[0].classList.add("gone");
            break;
        case "gone":
            mole.next = getHungryInterval();
            mole.status = 'hungry';
            // mole.king = getKingStatus();
            mole.node.children[0].classList.add("hungry");
            mole.node.children[0].classList.remove("gone");
            mole.node.children[0].src = './img/mole-hungry.png';
            break;
        case "hungry":
            mole.next = getSadInterval();
            mole.status = 'sad';
            mole.node.children[0].classList.remove("hungry");
            mole.node.children[0].src = './img/mole-sad.png';
            break;
    }
}

function feed (event) {
    if (event.target.tagName !== 'IMG' || !event.target.classList.contains("hungry")) {
        return;
    }

    const mole = moles[parseInt(event.target.dataset.index)];

    mole.status = 'fed';
    mole.next = getSadInterval();
    mole.node.children[0].src = './img/mole-fed.png';
    mole.node.children[0].classList.remove('hungry');

    score++;
    if (score >= 10) {
        showWinScreen();
    }
}

function showWinScreen () {
    document.querySelector('.bg').classList.add('hide');
    const wins = document.querySelectorAll('.win');
    wins.forEach(function(win) {
        win.classList.remove("hide");
    })
}

let runAgainAt = Date.now() + 100;

function nextFrame () {
    const now = Date.now();

    if (runAgainAt <= now) {
        for (let i = 0; i < moles.length; i++) {
            if (moles[i].next <= now) {
                getNextStatus(moles[i]);
            }
        }
        runAgainAt = now + 100;
    }
    requestAnimationFrame(nextFrame);
}

function resumeGame () {
    document.querySelector('.bg').classList.remove('hide');
    const wins = document.querySelectorAll('.win');
    wins.forEach(function(win) {
        win.classList.add("hide");
    })
    score = 0;
}

document.querySelector('.bg').addEventListener('click', feed);
document.querySelector('button').addEventListener('click', resumeGame);

nextFrame();