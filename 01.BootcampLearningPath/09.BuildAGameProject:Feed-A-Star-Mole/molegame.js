let score = 0;

function getInterval() { 
  return Date.now() + 2000 + Math.floor(Math.random() * 15000);
}

function getSadInterval() {
    return Date.now() + 800;
}

function getHungryInterval () {
    return Date.now() + 3000;
}

function getKingStatus () {
    return Math.random() > .9;
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
            if (mole.king) {
                mole.node.children[0].src = './img/king-mole-leaving.png';
            } else {
            mole.node.children[0].src = './img/mole-leaving.png';
            }
            break;
        case "leaving":
            mole.next = getInterval();
            mole.status = 'gone';
            mole.node.children[0].classList.add("gone");
            break;
        case "gone":
            mole.next = getHungryInterval();
            mole.status = 'hungry';
            mole.king = getKingStatus();
            mole.node.children[0].classList.add("hungry");
            mole.node.children[0].classList.remove("gone");
            if (mole.king) {
                mole.node.children[0].src = './img/king-mole-hungry.png';
            } else {
            mole.node.children[0].src = './img/mole-hungry.png';
            }
            break;
        case "hungry":
            mole.next = getSadInterval();
            mole.status = 'sad';
            mole.node.children[0].classList.remove("hungry");
            if (mole.king) {
                mole.node.children[0].src = './img/king-mole-sad.png';
            } else {
                mole.node.children[0].src = './img/mole-sad.png';
            }
            break;
    }
}

function feed (event) {
    if (event.target.tagName !== 'IMG' || !event.target.classList.contains("hungry")) {
        return;
    }

    const mole = moles[parseInt(event.target.dataset.index)];
    if (mole.king) {
        score += 2;
        mole.node.children[0].src = './img/king-mole-fed.png';
    } else {
        score++;
        mole.node.children[0].src = './img/mole-fed.png';
    }
    mole.status = 'fed';
    mole.next = getSadInterval();
    mole.node.children[0].classList.remove('hungry');

    if (score >= 10) {
        showWinScreen();
    }

    document.querySelector(".worm-container").style.width = `${10 * score}%`;
}

function showWinScreen () {
    document.querySelector('.bg').classList.add('hide');
    const wins = document.querySelectorAll('.win');
    wins.forEach(function(win) {
        win.classList.remove("hide");
    })
}

function resumeGame () {
    document.querySelector('.bg').classList.remove('hide');
    const wins = document.querySelectorAll('.win');
    wins.forEach(function(win) {
        win.classList.add("hide");
    })
    score = 0;
    document.querySelector(".worm-container").style.width = `0.1%`;
}

document.querySelector('.bg').addEventListener('click', feed);
document.querySelector('button').addEventListener('click', resumeGame);

function nextFrame() {
    const now = Date.now();
    for (let i = 0; i < moles.length; i++) {
        if (moles[i].next < now) {
            getNextStatus(moles[i]);
        }
    }
    requestAnimationFrame(nextFrame);
};

requestAnimationFrame(nextFrame);

/* let runAgainAt = Date.now() + 100;

function nextFrame() {
    const now = Date.now();

    if (runAgainAt < now) {
        for(let i = 0; i < moles.length; i++) {
            if (moles[i].next < now) {
                getNextStatus(moles[i]);
            }
        }
        runAgainAt = now + 100;
    }
    requestAnimationFrame(nextFrame);
}

nextFrame(); */