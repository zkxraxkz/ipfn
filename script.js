/* ==========================================
   SIR YOU ARE NOT SUPPOSE TO SEE THE CODE
    PLEASE DONT DO THISSS GAURAAVV SIRR NOOOOO 
    T_T
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const intro = document.getElementById("intro");
const video = document.getElementById("introVideo");
const home = document.getElementById("home");
const skipButton = document.getElementById("skipButton");

const transition =
    document.getElementById("transition");

const transitionLetter =
    document.getElementById("transitionLetter");

const transitionName =
    document.getElementById("transitionName");


/* ==========================================
   TEACHER DATA
========================================== */

const teachers = {

    A: {
        name: "ASHISH AJMERA",
        subject: "PHYSICS",

        /*
           youre really gonna read it all??
        */
        code: "NALAYAKO"

    },

    G: {
        name: "GAURAV SHARMA",
        subject: "CHEMISTRY",

        code: "IIT MEANS EASY CHEMISTRY MEANS DAMN EASY"

    },

    V: {
        name: "VIKAS MAHESHWARI",
        subject: "MATHEMATICS",

        code: "CHILL RAHO"

    }

};


/* ==========================================
   INTRO VIDEO
========================================== */

let introFinished = false;


function finishIntro() {

    if (introFinished) return;

    introFinished = true;

    if (video) {
        video.pause();
    }

    intro.classList.add("finished");

    home.classList.remove("hidden");

    setTimeout(() => {

        intro.style.display = "none";

    }, 900);

}


if (video) {

    video.addEventListener(
        "ended",
        finishIntro
    );

    video.addEventListener(
        "error",
        () => {

            const fallback =
                document.getElementById(
                    "videoFallback"
                );

            if (fallback) {
                fallback.style.display = "flex";
            }

        }
    );

}


skipButton.addEventListener(
    "click",
    finishIntro
);


/* ==========================================
   CREATE ACCESS SCREEN
========================================== */

function createAccessScreen(key) {

    const teacher = teachers[key];

    if (!teacher) return;


    const oldScreen =
        document.getElementById(
            "accessScreen"
        );

    if (oldScreen) {
        oldScreen.remove();
    }


    /* Build screen */

    const screen =
        document.createElement("section");

    screen.id = "accessScreen";

    screen.className =
        `access-screen ${key}`;


    screen.innerHTML = `

        <div class="access-noise"></div>

        <button
            class="access-back"
            id="accessBack"
        >
            ← BACK
        </button>


        <div class="access-container">


            <div class="access-top">

                <span>
                    CLASSROOM ACCESS
                </span>

                <span>
                    ${key} / 03
                </span>

            </div>


            <div class="access-main">


                <div class="access-subject">

                    ${teacher.subject}

                </div>


                <h1>

                    ${teacher.name}

                </h1>


                <p class="access-description">

                    A private message is waiting
                    inside this classroom.

                </p>


                <div class="code-label">

                    ENTER CLASS CODE

                </div>


                <form
                    id="codeForm"
                    autocomplete="off"
                >

                    <div class="code-wrapper">

                        <input
                            id="codeInput"
                            type="password"
                            maxlength="80"
                            spellcheck="false"
                            autocomplete="off"
                            placeholder="01010101"
                            aria-label="Class code"
                        >

                        <button
                            type="submit"
                            class="unlock-button"
                        >

                            UNLOCK ↗

                        </button>

                    </div>


                    <div
                        id="codeMessage"
                        class="code-message"
                    ></div>

                </form>


            </div>


            <div class="access-bottom">

                <span>
                    PRIVATE CLASSROOM
                </span>

                <span>
                    CONNECTION SECURE
                </span>

            </div>


        </div>
    `;


    document.body.appendChild(screen);


    /* Animate in */

    requestAnimationFrame(() => {

        screen.classList.add("show");

    });


    /* Focus input */

    setTimeout(() => {

        document.getElementById(
            "codeInput"
        )?.focus();

    }, 500);


    /* Back */

    document
        .getElementById("accessBack")
        .addEventListener(
            "click",
            () => closeAccessScreen()
        );


    /* Form */

    document
        .getElementById("codeForm")
        .addEventListener(
            "submit",
            event => {

                event.preventDefault();

                checkCode(key);

            }
        );

}


/* ==========================================
   CHECK CODE
========================================== */

function checkCode(key) {

    const teacher = teachers[key];

    const input =
        document.getElementById(
            "codeInput"
        );

    const message =
        document.getElementById(
            "codeMessage"
        );

    const screen =
        document.getElementById(
            "accessScreen"
        );


    if (!input || !message) return;


    const entered =
        input.value.trim();


    /* Empty */

    if (!entered) {

        message.textContent =
            "ENTER A CLASS CODE.";

        message.className =
            "code-message error";

        input.classList.add("shake");

        setTimeout(() => {
            input.classList.remove("shake");
        }, 450);

        return;

    }


    /* WRONG CODE */

    if (
        entered.toUpperCase() !==
        teacher.code.toUpperCase()
    ) {

        message.textContent =
            "ACCESS DENIED — CHECK YOUR CODE.";

        message.className =
            "code-message error";

        input.value = "";

        input.classList.add("shake");

        setTimeout(() => {

            input.classList.remove(
                "shake"
            );

        }, 450);

        return;

    }


    /* CORRECT */

    message.textContent =
        "IDENTITY VERIFIED.";

    message.className =
        "code-message success";


    input.disabled = true;


    /* cinematic success */

    setTimeout(() => {

        screen.classList.add(
            "unlocking"
        );

    }, 250);


    /*
       hi hi sirr
    */

    setTimeout(() => {

        showTeacherPage(
            key
        );

    }, 1100);

}


/* ==========================================
   CLOSE ACCESS
========================================== */

function closeAccessScreen() {

    const screen =
        document.getElementById(
            "accessScreen"
        );

    if (!screen) return;

    screen.classList.remove("show");

    setTimeout(() => {

        screen.remove();

        home.scrollIntoView({
            behavior: "instant"
        });

    }, 500);

}


/* ==========================================
   TEMPORARY TEACHER PAGE
========================================== */

function showTeacherPage(key) {

    const teacher = teachers[key];

    const screen =
        document.getElementById("accessScreen");

    if (!screen) return;


    /* =====================================
       PHYSICS — ASHISH
    ===================================== */

    if (key === "A") {

       screen.className =
    "access-screen A physics-page show";

        screen.innerHTML = `

            <div class="physics-lab">

                <!-- top navigation -->

                <div class="lab-top">

                    <div class="lab-brand">
                        PHYSICS LAB
                    </div>

                    <div class="lab-status">
                        EXPERIMENT / 01
                    </div>

                </div>


                <!-- main content -->

                <div class="experiment">

                    <div class="experiment-label">
                        FINAL EXPERIMENT
                    </div>


                    <h1>
                        Some things<br>
                        <em>can't be measured.</em>
                    </h1>


                    <p class="experiment-intro">
                        Before you enter the classroom,
                        complete one final experiment.
                    </p>


                    <!-- Experiment -->

                    <div class="experiment-box">

                        <div class="experiment-readout">

                            <span>
                                FORCE
                            </span>

                            <strong id="forceValue">
                                67 N
                            </strong>

                        </div>


                        <div class="track">

                            <div
                                class="track-line"
                            ></div>

                            <div
                                id="particle"
                                class="particle"
                            ></div>

                        </div>


                        <div class="experiment-controls">

                            <label>
                                ADJUST FORCE
                            </label>

                            <input
                                id="forceSlider"
                                type="range"
                                min="0"
                                max="100"
                                value="50"
                            >

                            <div class="range-values">

                                <span>
                                    0 N
                                </span>

                                <span>
                                    100 N
                                </span>

                            </div>

                        </div>


                        <div
                            id="experimentHint"
                            class="experiment-hint"
                        >
                            Find the point where the system
                            becomes stable.
                        </div>


                        <button
                            id="stabilizeButton"
                            class="stabilize-button"
                        >
                            STABILIZE SYSTEM ↗
                        </button>

                    </div>

                </div>


                <!-- bottom -->

                <div class="lab-bottom">

                    <span>
                        ASHISH AJMERA / PHYSICS
                    </span>

                    <span>
                        TEACHERS' DAY / 2026
                    </span>

                </div>


                <!-- message -->

                <div
                    id="physicsMessage"
                    class="physics-message"
                >

                    <div class="message-small">
                        SYSTEM STABLE
                    </div>

                    <div class="message-line">
                    </div>

                    <h2>
                        There are some impacts<br>
                        that can't be measured.
                    </h2>

                    <p>
                        <!--
                        wait maybe ts could be someone on github, hi hi.
                        -->
                        Physics have always been my favourite subject, I remember once when I was a kid, fascinated by magnets, I ran toward my mother and asked her, “maa why they attract and repel each other at different arrangement , how do I know more about it” she told me “youll study this in higher class” and that was also the time when I was exited for upcoming education knowing it’ll be fun, and this exitment never fades because ive always gotten myself the best physics teacher, my tution teacher always told us, the physics you’ll be gonna study in high school is totally different from what your’e studying noe, be carefull and choose a good institute ( he always supports allen kota he send Mazin Mansoor AIR 1 NEET 2024 to allen kota and more) when I joined allen I was like ok atleast I ddin’t get a bad physics teacher like some of my senior ( they’re in offline allen) but when I was selected to SPG batch I was happy, too happy, knowing ill be getting my knowledge staright from senior faculty and I was right, the way you teach us physics is magical and the magician is you itself and why not, there’s never ever been a day when we were feeling time , it was like eintntes got the concept of relative timing from attending your class, umm idk what else to say + you don’t have that much time to read a long paragraph so yea HAPPYY TEACHERSSS DAYYY!!!! and im so happy that  you're my teacher :)

                        <br><br>

                        You didn't just teach us
                        Physics — you made us look
                        at the world differently.
                    </p>

                    <div class="message-sign">
                        — FROM YOUR STUDENT
                    </div>

                </div>

            </div>
        `;


        /* =====================================
           FORCE SLIDER
        ===================================== */

        const slider =
            document.getElementById(
                "forceSlider"
            );

        const forceValue =
            document.getElementById(
                "forceValue"
            );

        const particle =
            document.getElementById(
                "particle"
            );


        if (slider) {

            slider.addEventListener(
                "input",
                () => {

                    const value =
                        Number(slider.value);

                    forceValue.textContent =
                        `${value} N`;


                    /*
                        Particle position.
                    */

                    const movement =
                        (value - 67) * 2.4;

                    particle.style.transform =
                        `translateX(${movement}px)`;

                }
            );

        }


        /* =====================================
           STABILIZE
        ===================================== */

        const stabilizeButton =
            document.getElementById(
                "stabilizeButton"
            );

        const experimentBox =
            document.querySelector(
                ".experiment-box"
            );

        const hint =
            document.getElementById(
                "experimentHint"
            );

        const message =
            document.getElementById(
                "physicsMessage"
            );


        stabilizeButton.addEventListener(
            "click",
            () => {

                /*
                    We intentionally make the
                    target 73N rather than 50N.
                    It feels like an actual puzzle.
                */

                const value =
                    Number(slider.value);


                if (value !== 40) {

                    hint.textContent =
                        "SYSTEM UNSTABLE — ADJUST THE FORCE.";

                    hint.classList.add(
                        "wrong"
                    );

                    experimentBox
                        .classList
                        .add("shake");


                    setTimeout(() => {

                        experimentBox
                            .classList
                            .remove("shake");

                        hint.classList.remove(
                            "wrong"
                        );

                    }, 500);

                    return;

                }


                /* SUCCESS */

                hint.textContent =
                    "SYSTEM STABLE.";

                hint.classList.add(
                    "success"
                );

                experimentBox.classList.add(
                    "stable"
                );

                stabilizeButton.disabled =
                    true;


                setTimeout(() => {

                    message.classList.add(
                        "show"
                    );

                }, 900);

            }
        );

    }
/* =====================================
   CHEMISTRY — GAURAV SHARMA
===================================== */

if (key === "G") {

    screen.className =
        "access-screen G chemistry-page show";

    screen.innerHTML = `

        <div class="chem-page">

            <header class="chem-header">
                <span>ORGANIC LAB</span>
                <span>REACTION / 02</span>
            </header>


            <section class="chem-intro">

                <div class="chem-kicker">
                    STRUCTURE CONSTRUCTION
                </div>

                <h1>
                    Build the
                    <em>correct structure.</em>
                </h1>

                <p>
                    Starting compound:
                    <strong>PHENOL</strong>
                    <br>
                    Select a group from the inventory,
                    then drag it onto an available position to make 2,4,6-TRINITROPHENOL.
                </p>

            </section>


            <!-- ==========================
                 MOLECULAR BUILDER
            =========================== -->

            <section class="builder">


                <!-- MOLECULE -->

                <div class="molecule-panel">

                    <div class="panel-head">

                        <span>
                            MOLECULAR WORKSPACE
                        </span>

                        <span>
                            PHENOL
                        </span>

                    </div>


                    <div class="molecule-area">

                        <svg
                            id="benzeneSvg"
                            viewBox="0 0 600 500"
                        >

                            <!-- benzene -->

                            <polygon
                                class="benzene-outline"
                                points="
                                    300,115
                                    415,182
                                    415,318
                                    300,385
                                    185,318
                                    185,182
                                "
                            />


                            <!-- inner ring -->

                            <circle
                                class="benzene-inner"
                                cx="300"
                                cy="250"
                                r="68"
                            />


                            <!-- bonds -->

                            <line
                                class="bond"
                                x1="235"
                                y1="153"
                                x2="365"
                                y2="153"
                            />

                            <line
                                class="bond"
                                x1="400"
                                y1="205"
                                x2="335"
                                y2="350"
                            />

                            <line
                                class="bond"
                                x1="265"
                                y1="350"
                                x2="200"
                                y2="205"
                            />


                            <!--
                                POSITION 1
                                FIXED OH
                            -->

                            <g
                                class="attachment fixed"
                                data-position="1"
                            >

                                <circle
                                    cx="300"
                                    cy="65"
                                    r="30"
                                />

                                <text
                                    x="300"
                                    y="72"
                                >OH</text>

                            </g>


                            <!-- 2 -->

                            <g
                                class="attachment"
                                data-position="2"
                            >

                                <circle
                                    cx="455"
                                    cy="160"
                                    r="30"
                                />

                                <text
                                    x="455"
                                    y="167"
                                >+</text>

                            </g>


                            <!-- 3 -->

                            <g
                                class="attachment"
                                data-position="3"
                            >

                                <circle
                                    cx="455"
                                    cy="340"
                                    r="30"
                                />

                                <text
                                    x="455"
                                    y="347"
                                >+</text>

                            </g>


                            <!-- 4 -->

                            <g
                                class="attachment"
                                data-position="4"
                            >

                                <circle
                                    cx="300"
                                    cy="435"
                                    r="30"
                                />

                                <text
                                    x="300"
                                    y="442"
                                >+</text>

                            </g>


                            <!-- 5 -->

                            <g
                                class="attachment"
                                data-position="5"
                            >

                                <circle
                                    cx="145"
                                    cy="340"
                                    r="30"
                                />

                                <text
                                    x="145"
                                    y="347"
                                >+</text>

                            </g>


                            <!-- 6 -->

                            <g
                                class="attachment"
                                data-position="6"
                            >

                                <circle
                                    cx="145"
                                    cy="160"
                                    r="30"
                                />

                                <text
                                    x="145"
                                    y="167"
                                >+</text>

                            </g>

                        </svg>


                        <div
                            id="selectedGroup"
                            class="selected-group"
                        >
                            NOTHING SELECTED
                        </div>

                    </div>

                </div>


                <!-- ==========================
                     INVENTORY
                =========================== -->

                <aside class="inventory-panel">

                    <div class="inventory-title">

                        <span>INVENTORY</span>

                        <span>07</span>

                    </div>


                    <div class="inventory-instruction">

                        DRAG A GROUP<br>
                        OR CLICK TO SELECT

                    </div>


                    <button
                        class="group-piece"
                        draggable="true"
                        data-group="NO₂"
                    >
                        <span>NO₂</span>
                        <small>NITRO</small>
                    </button>


                    <button
                        class="group-piece"
                        draggable="true"
                        data-group="CH₃"
                    >
                        <span>CH₃</span>
                        <small>METHYL</small>
                    </button>


                    <button
                        class="group-piece"
                        draggable="true"
                        data-group="Cl"
                    >
                        <span>Cl</span>
                        <small>CHLORO</small>
                    </button>


                    <button
                        class="group-piece"
                        draggable="true"
                        data-group="Br"
                    >
                        <span>Br</span>
                        <small>BROMO</small>
                    </button>


                    <button
                        class="group-piece"
                        draggable="true"
                        data-group="NH₂"
                    >
                        <span>NH₂</span>
                        <small>AMINO</small>
                    </button>


                    <button
                        class="group-piece"
                        draggable="true"
                        data-group="OCH₃"
                    >
                        <span>OCH₃</span>
                        <small>METHOXY</small>
                    </button>


                    <button
                        class="group-piece"
                        draggable="true"
                        data-group="H"
                    >
                        <span>H</span>
                        <small>HYDROGEN</small>
                    </button>


                </aside>

            </section>


            <section class="chem-controls">

                <div
                    id="chemHint"
                    class="chem-hint"
                >
                    Build the required substituted phenol.
                </div>

                <button
                    id="checkMolecule"
                    class="verify-button"
                >
                    VERIFY STRUCTURE ↗
                </button>

                <div
                    id="chemResult"
                    class="chem-result"
                ></div>

            </section>


            <footer class="chem-footer">

                <span>
                    GAURAV SHARMA / CHEMISTRY
                </span>

                <span>
                    TEACHERS' DAY / 2026
                </span>

            </footer>


            <!-- ==================================
                 HIDDEN SURPRISE
                 ABSOLUTELY INVISIBLE INITIALLY
            =================================== -->

            <div
                id="chemMessage"
                class="chem-secret"
                aria-hidden="true"
            >

                <div class="secret-content">

                    <div class="secret-kicker">
                        STRUCTURE VERIFIED
                    </div>

                    <h2>
                        Some bonds<br>
                        <em>can't be written.</em>
                    </h2>

                    <div class="secret-line"></div>

                    <p>
                        Sir, thank you for every explanation,
                        every doubt you cleared, and every class
                        where you somehow managed to make
                        Chemistry feel a little less terrifying.Mujhe hamesha chemistry se daraya jaata tha, even my seniors who’s are lowkey AIR holders says they both love and hate chemistry at the same time because it was the easiest and sabse zyada yaad krne wala subject, our home town tution teacher used to tell us that maths physics abhi hi krlo jitna kar skte ho chemistry pr risk nhi lena it depends purely on your techer and chemisrty hi rank laati hai, I was afraid by this statement of his and when I joined allen, I was first little comfortable but soon I became anxious because my friend whos in allen kota used to tell me are tumhe ye nahi bataya iss chapter mai wo nhi bataya ( sandeep sir mostly ignore D block elements saying ki tumlog toh 12th mai padhloge iske baare mai) but from the time im in this batch im just confident that yes I could be able to achieve our aim which is to secure full marks, im not like ki yashwardhan bhaiya ki nhi aayi tohmeri kaise aayegi kyuki unhone kabhi ye nhi socha hoga ki allen online mai kisi ki 50 se kam rank kaha aayi hai toh meri kaha se aayegi, so yup I have nothing else in mind to say rn so happy teachers day sir im so happy to have you as my chemistry teacher

                        <br><br>

                        Thank you for being the kind of teacher
                        whose lessons stay long after the class ends.
                    </p>

                    <div class="secret-sign">
                        — FROM YOUR STUDENTS
                    </div>

                </div>

            </div>

        </div>
    `;


    /* =====================================
       PUZZLE
    ===================================== */

    const selectedDisplay =
        document.getElementById("selectedGroup");

    const pieces =
        document.querySelectorAll(".group-piece");

    const slots =
        document.querySelectorAll(
            ".attachment:not(.fixed)"
        );

    const result =
        document.getElementById("chemResult");

    const hint =
        document.getElementById("chemHint");

    const verify =
        document.getElementById("checkMolecule");


    const molecule = {
        2: null,
        3: null,
        4: null,
        5: null,
        6: null
    };


    let selectedGroup = null;


    /* =====================================
       INVENTORY CLICK
    ===================================== */

    pieces.forEach(piece => {

        piece.addEventListener(
            "click",
            () => {

                selectedGroup =
                    piece.dataset.group;


                pieces.forEach(p => {

                    p.classList.remove(
                        "selected"
                    );

                });


                piece.classList.add(
                    "selected"
                );


                selectedDisplay.textContent =
                    `SELECTED: ${selectedGroup}`;

            }
        );


        /* ==================================
           DRAG START
        ================================== */

        piece.addEventListener(
            "dragstart",
            event => {

                selectedGroup =
                    piece.dataset.group;

                event.dataTransfer.setData(
                    "text/plain",
                    selectedGroup
                );

            }
        );

    });


    /* =====================================
       SLOT DRAGGING
    ===================================== */

    slots.forEach(slot => {

        slot.addEventListener(
            "dragover",
            event => {

                event.preventDefault();

                slot.classList.add(
                    "dragging-over"
                );

            }
        );


        slot.addEventListener(
            "dragleave",
            () => {

                slot.classList.remove(
                    "dragging-over"
                );

            }
        );


        slot.addEventListener(
            "drop",
            event => {

                event.preventDefault();

                slot.classList.remove(
                    "dragging-over"
                );


                const group =
                    event.dataTransfer.getData(
                        "text/plain"
                    );


                if (!group) return;


                putGroup(
                    slot,
                    group
                );

            }
        );


        /* ==================================
           MOBILE / CLICK
        ================================== */

        slot.addEventListener(
            "click",
            () => {

                if (!selectedGroup) {

                    selectedDisplay.textContent =
                        "SELECT A GROUP FIRST";

                    return;

                }


                putGroup(
                    slot,
                    selectedGroup
                );

            }
        );

    });


    /* =====================================
       PUT GROUP
    ===================================== */

    function putGroup(
        slot,
        group
    ) {

        const position =
            slot.dataset.position;


        molecule[position] =
            group;


        const text =
            slot.querySelector("text");


        text.textContent =
            group;


        slot.classList.add(
            "filled"
        );


        selectedDisplay.textContent =
            `${group} PLACED AT POSITION ${position}`;


        selectedGroup = null;


        pieces.forEach(piece => {

            piece.classList.remove(
                "selected"
            );

        });


        slot.querySelector(
            "circle"
        ).style.animation =
            "moleculePop .3s ease";

    }


    /* =====================================
       VERIFY
    ===================================== */

    verify.addEventListener(
        "click",
        () => {

            /*
                REQUIRED STRUCTURE:

                Position 1 = OH

                Position 2 = NO₂
                Position 4 = NO₂
                Position 6 = NO₂

                Therefore:
                2,4,6-trinitrophenol

                hi hi if anyone know wht ts not woring on like tablet type display please tell me also its lowkey 2 3 4 5 6 tri nitropheneonl
            */

            const correct =
                molecule[2] === "NO₂" &&
                molecule[4] === "NO₂" &&
                molecule[6] === "NO₂";


            if (!correct) {

                result.textContent =
                    "STRUCTURE INVALID — CHECK THE POSITIONS.";

                result.className =
                    "chem-result wrong";


                const builder =
                    document.querySelector(
                        ".builder"
                    );


                builder.classList.add(
                    "chem-error-shake"
                );


                setTimeout(() => {

                    builder.classList.remove(
                        "chem-error-shake"
                    );

                }, 450);


                return;

            }


            /* =================================
               CORRECT
            ================================= */

            result.textContent =
                "STRUCTURE VALID ✓";


            result.className =
                "chem-result correct";


            hint.textContent =
                "2,4,6-TRINITROPHENOL — REACTION ACCEPTED.";


            hint.classList.add(
                "success"
            );


            verify.disabled =
                true;


            document
                .querySelector(
                    ".builder"
                )
                .classList.add(
                    "reaction-success"
                );


            /* =================================
               REVEAL SURPRISE
            ================================= */

            setTimeout(() => {

                const message =
                    document.getElementById(
                        "chemMessage"
                    );


                message.setAttribute(
                    "aria-hidden",
                    "false"
                );


                message.classList.add(
                    "revealed"
                );

            }, 1100);

        }
    );

}
/* =====================================
   MATHEMATICS — VIKAS MAHESHWARI
===================================== */

if (key === "V") {

    screen.className =
        "access-screen V maths-page show";

    screen.innerHTML = `

        <div class="maths-page">

            <!-- HEADER -->

            <header class="maths-header">

                <span>
                    COORDINATE GEOMETRY
                </span>

                <span>
                    PROBLEM / 03
                </span>

            </header>


            <!-- INTRO -->

            <section class="maths-intro">

                <div class="maths-kicker">
                    ONE POINT IS MISSING
                </div>

                <h1>
                    Find the
                    <em>missing point.</em>
                </h1>

                <p>
                    Use the information below,
                    then plot the point on the coordinate plane.
                </p>

            </section>


            <!-- ==================================
                 PUZZLE AREA
            =================================== -->

            <section class="maths-puzzle">


                <!-- LEFT: QUESTION -->

                <div class="maths-question">

                    <div class="question-label">
                        GIVEN
                    </div>


                    <div class="given-point">
                        <span>A</span>
                        <strong>(2, 1)</strong>
                    </div>


                    <div class="given-point">
                        <span>B</span>
                        <strong>(8, 7)</strong>
                    </div>


                    <div class="question-rule"></div>


                    <div class="question-label">
                        CONDITION
                    </div>


                    <p class="condition">

                        P divides AB internally
                        in the ratio

                        <strong>1 : 2</strong>

                    </p>


                    <div class="formula-box">

                        <div>
                            SECTION FORMULA
                        </div>

                        <code>
                            P = ((mx₂ + nx₁)/(m+n),
                            (my₂ + ny₁)/(m+n))
                        </code>

                    </div>


                    <div class="maths-instruction">

                        Find <strong>P</strong> and click
                        its position on the graph.

                    </div>

                </div>



                <!-- RIGHT: GRAPH -->

                <div class="graph-panel">

                    <div class="graph-head">

                        <span>
                            COORDINATE PLANE
                        </span>

                        <span id="cursorCoord">
                            x: — &nbsp; y: —
                        </span>

                    </div>


                    <div
                        id="coordinateGraph"
                        class="coordinate-graph"
                    >

                        <svg
                            id="mathGraph"
                            viewBox="0 0 600 600"
                        >

                            <!-- =================
                                 GRID
                            ================== -->

                            <defs>

                                <pattern
                                    id="gridPattern"
                                    width="40"
                                    height="40"
                                    patternUnits="userSpaceOnUse"
                                >

                                    <path
                                        d="M 40 0 L 0 0 0 40"
                                        fill="none"
                                        stroke="rgba(255,255,255,.09)"
                                        stroke-width="1"
                                    />

                                </pattern>

                            </defs>


                            <rect
                                x="0"
                                y="0"
                                width="600"
                                height="600"
                                fill="url(#gridPattern)"
                            />


                            <!-- AXES -->

                            <line
                                x1="300"
                                y1="0"
                                x2="300"
                                y2="600"
                                class="axis"
                            />

                            <line
                                x1="0"
                                y1="300"
                                x2="600"
                                y2="300"
                                class="axis"
                            />


                            <!-- ARROWS -->

                            <polygon
                                points="300,5 294,17 306,17"
                                class="axis-arrow"
                            />

                            <polygon
                                points="595,300 583,294 583,306"
                                class="axis-arrow"
                            />


                            <!-- X LABEL -->

                            <text
                                x="570"
                                y="287"
                                class="axis-label"
                            >
                                x
                            </text>


                            <!-- Y LABEL -->

                            <text
                                x="313"
                                y="27"
                                class="axis-label"
                            >
                                y
                            </text>


                            <!-- POINT A -->

                            <circle
                                id="pointA"
                                cx="380"
                                cy="280"
                                r="8"
                                class="given-dot"
                            />

                            <text
                                x="392"
                                y="272"
                                class="point-label"
                            >
                                A
                            </text>


                            <!-- POINT B -->

                            <circle
                                id="pointB"
                                cx="140"
                                cy="40"
                                r="8"
                                class="given-dot"
                            />

                            <text
                                x="152"
                                y="35"
                                class="point-label"
                            >
                                B
                            </text>


                            <!-- LINE AB -->

                            <line
                                x1="380"
                                y1="280"
                                x2="140"
                                y2="40"
                                class="answer-line"
                            />


                            <!-- USER POINT -->

                            <g
                                id="userPoint"
                                class="user-point hidden-point"
                            >

                                <circle
                                    cx="300"
                                    cy="200"
                                    r="9"
                                />

                                <text
                                    x="314"
                                    y="194"
                                >
                                    P
                                </text>

                            </g>


                            <!-- CORRECT AREA -->

                            <circle
                                id="targetGlow"
                                cx="300"
                                cy="200"
                                r="22"
                                class="target-glow"
                            />

                        </svg>

                    </div>


                    <div
                        id="plotReadout"
                        class="plot-readout"
                    >
                        CLICK ANYWHERE ON THE GRAPH
                    </div>

                </div>

            </section>


            <!-- CONTROLS -->

            <section class="maths-controls">

                <div
                    id="mathHint"
                    class="math-hint"
                >
                    P has not been plotted yet.
                </div>


                <button
                    id="verifyPoint"
                    class="verify-point"
                >
                    VERIFY POINT ↗
                </button>


                <div
                    id="mathResult"
                    class="math-result"
                ></div>

            </section>


            <!-- FOOTER -->

            <footer class="maths-footer">

                <span>
                    VIKAS MAHESHWARI / MATHEMATICS
                </span>

                <span>
                    TEACHERS' DAY / 2026
                </span>

            </footer>


            <!-- ==================================
                 HIDDEN SURPRISE
            =================================== -->

            <div
                id="mathMessage"
                class="math-secret"
                aria-hidden="true"
            >

                <div class="math-secret-content">

                    <div class="proof-complete">
                        PROOF COMPLETE
                    </div>

                    <h2>
                        Some things<br>
                        <em>can't be calculated.</em>
                    </h2>

                    <div class="math-line"></div>

                    <p>
                        Sir, thank you for every problem
                        you've helped us solve, every doubt
                        you've patiently explained, and every
                        class that made difficult things feel
                        possible.Something ive learned in class 11th is that the word “best” is subjective term, maths have always been one of my favourite subject since class 3 because before that it was all addition subtraction etc, but they say if you stop doing maths for 1 day it will haunt you for two day, same thing happened to me in class 5th because it was lockdown, somehow we all know how we passed our exams during covid but yea after that my marks starts to drop , although I saved it through joining a tution which was my best decision and my maths got soo well that I started my class 11th in class 9th or moreover I tried to, uss time pr VG sir bohot famous the by the name indias best maths teacher for jee, maine unse hi padhna shuru kiya and MUJHE MATHS SE DARR LAGNE LAGA moreover I started to think my decision and lowkey quit krdia maine maths because boards and like haa mai 10th mai aagya tha toh boards and tallentex, gye mere maths kisi trh I hate I cant score full marks in my boards maths but fir jab 11th mai harsh sir ne bola ki word best is a subjective term mai samjha nhi kyuki in some cases we all know whos number one ( sports ki baat krrha hu) but jabse mai SPG batch mai aaya hu and aapse maths padhi hai, mujhe iss baat pr 100 % believe hogya hai ki yes the word best is a subjective term and from now on the india’s best mathematics teacher is vikas maheshwari sir, the way you taught us playfully and cheerfully is very good I am so happy that youre my teacher and yea happy teachers day sir.

                        <br><br>

                        Some lessons stay with us long after
                        the equation is finished.
                    </p>

                    <div class="math-sign">
                        — FROM YOUR STUDENT
                    </div>

                </div>

            </div>

        </div>
    `;


    /* =====================================
       ELEMENTS
    ===================================== */

    const graph =
        document.getElementById(
            "coordinateGraph"
        );

    const svg =
        document.getElementById(
            "mathGraph"
        );

    const userPoint =
        document.getElementById(
            "userPoint"
        );

    const cursorCoord =
        document.getElementById(
            "cursorCoord"
        );

    const plotReadout =
        document.getElementById(
            "plotReadout"
        );

    const hint =
        document.getElementById(
            "mathHint"
        );

    const result =
        document.getElementById(
            "mathResult"
        );

    const verify =
        document.getElementById(
            "verifyPoint"
        );


    let plottedX = null;
    let plottedY = null;


    /* =====================================
       GRAPH MATH

       Graph:
       15 units wide
       15 units tall

       Center = (0,0)

       Each grid square = 1 unit
    ===================================== */

    const RANGE = 7.5;
    const CENTER = 300;
    const SCALE = 40;


    function screenToCoordinate(
        clientX,
        clientY
    ) {

        const rect =
            svg.getBoundingClientRect();


        const svgX =
            (
                (clientX - rect.left)
                / rect.width
            ) * 600;


        const svgY =
            (
                (clientY - rect.top)
                / rect.height
            ) * 600;


        const x =
            Math.round(
                (svgX - CENTER) / SCALE
            );


        const y =
            Math.round(
                (CENTER - svgY) / SCALE
            );


        return {
            x,
            y,
            svgX:
                CENTER + x * SCALE,
            svgY:
                CENTER - y * SCALE
        };

    }


    /* =====================================
       MOVE MOUSE
    ===================================== */

    graph.addEventListener(
        "mousemove",
        event => {

            const point =
                screenToCoordinate(
                    event.clientX,
                    event.clientY
                );


            cursorCoord.textContent =
                `x: ${point.x}   y: ${point.y}`;

        }
    );


    /* =====================================
       CLICK GRAPH
    ===================================== */

    graph.addEventListener(
        "click",
        event => {

            const point =
                screenToCoordinate(
                    event.clientX,
                    event.clientY
                );


            plottedX = point.x;
            plottedY = point.y;


            userPoint.classList.remove(
                "hidden-point"
            );


            userPoint.setAttribute(
                "transform",
                `translate(${point.svgX - 0},
                           ${point.svgY - 0})`
            );


            /*
                Move the SVG elements by
                changing their actual coordinates.

                This keeps the coordinate label
                exactly where the user clicked.
            */

            const circle =
                userPoint.querySelector(
                    "circle"
                );


            const label =
                userPoint.querySelector(
                    "text"
                );


            circle.setAttribute(
                "cx",
                point.svgX
            );


            circle.setAttribute(
                "cy",
                point.svgY
            );


            label.setAttribute(
                "x",
                point.svgX + 14
            );


            label.setAttribute(
                "y",
                point.svgY - 10
            );


            plotReadout.textContent =
                `P = (${point.x}, ${point.y})`;


            hint.textContent =
                "Point plotted. Verify your answer.";

            hint.classList.remove(
                "wrong",
                "correct"
            );

            result.textContent = "";

        }
    );


    /* =====================================
       VERIFY
    ===================================== */

    verify.addEventListener(
        "click",
        () => {

            if (
                plottedX === null ||
                plottedY === null
            ) {

                result.textContent =
                    "PLOT A POINT FIRST.";

                result.className =
                    "math-result wrong";

                return;

            }


            /*
                Section formula:

                A = (2,1)
                B = (8,7)

                ratio = 1:2

                x = (1×8 + 2×2) / 3
                  = 12 / 3
                  = 4

                y = (1×7 + 2×1) / 3
                  = 9 / 3
                  = 3

                Correct P = (4,3)
            */

            const correctX = 4;
            const correctY = 3;


            if (
                plottedX !== correctX ||
                plottedY !== correctY
            ) {

                result.textContent =
                    "POINT INCORRECT — CHECK THE SECTION FORMULA.";

                result.className =
                    "math-result wrong";


                document
                    .querySelector(
                        ".maths-puzzle"
                    )
                    .classList.add(
                        "math-shake"
                    );


                setTimeout(() => {

                    document
                        .querySelector(
                            ".maths-puzzle"
                        )
                        .classList.remove(
                            "math-shake"
                        );

                }, 450);


                return;

            }


            /* =================================
               CORRECT
            ================================= */

            result.textContent =
                "POINT VERIFIED ✓";

            result.className =
                "math-result correct";


            hint.textContent =
                "P = (4, 3) — PROOF COMPLETE.";


            hint.classList.add(
                "correct"
            );


            verify.disabled =
                true;


            document
                .querySelector(
                    ".maths-puzzle"
                )
                .classList.add(
                    "math-success"
                );


            document
                .getElementById(
                    "targetGlow"
                )
                .classList.add(
                    "target-visible"
                );


            setTimeout(() => {

                const message =
                    document.getElementById(
                        "mathMessage"
                    );


                message.setAttribute(
                    "aria-hidden",
                    "false"
                );


                message.classList.add(
                    "revealed"
                );

            }, 1200);

        }
    );

}
}


/* ==========================================
   TEACHER CARDS
========================================== */

const teacherCards =
    document.querySelectorAll(
        ".teacher-card"
    );


teacherCards.forEach(card => {

    const key =
        card.dataset.teacher;


    /* Mouse */

    card.addEventListener(
        "click",
        () => {

            createAccessScreen(key);

        }
    );


    /* Keyboard */

    card.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                createAccessScreen(key);

            }

        }
    );

});