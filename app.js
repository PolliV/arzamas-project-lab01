(() => {

  const MAX = {
    fortress: 1,
    merchant: 2,
    spiritual: 2,
    technical: 2,
    craft: 2,
    social: 4,
    cultural: 4
  };

  const LABEL = {
    fortress: "🛡 Крепостной Арзамас",
    merchant: "💰 Купеческий Арзамас",
    spiritual: "⛪ Духовный Арзамас",
    technical: "⚙ Технический Арзамас",
    craft: "🪵 Ремесленный Арзамас",
    social: "👥 Общественный Арзамас",
    cultural: "🎨 Культурный Арзамас"
  };

  const CHIMERA = {
    "merchant|spiritual": "💰⛪ Купеческий и духовный",
    "technical|craft": "⚙🪵 Технический и ремесленный",
    "fortress|cultural": "🛡🎨 Крепостной и культурный",
    "social|spiritual": "👥⛪ Общественный и духовный",
    "merchant|social": "💰👥 Купеческий и общественный",
    "cultural|spiritual": "🎨⛪ Культурный и духовный",
    "technical|social": "⚙👥 Технический и общественный"
  };

  const TYPE_CONTENT = {
    fortress: {
      description: "Ваш Арзамас — крепостной. В этом образе город прежде всего воспринимается как пограничная точка, место памяти о линии обороны, валах, рвах и ранней истории.",
      photos: [
        {
          src: "images/result/fortress-1.jpg",
          alt: "Крепостной Арзамас, 1",
          caption: "Картина С.А.Сорокина «Арзамасская крепость.Настасьенские ворота.»"
        },
        {
          src: "images/result/fortress-2.jpg",
          alt: "Крепостной Арзамас, 2",
          caption: "Картина Серафима Пузарина «Алена Арзамасская в Темникове.»"
        },
        {
          src: "images/result/fortress-3.jpg",
          alt: "Крепостной Арзамас, 3",
          caption: "Стрельцы. Фрагмент картины С. В. Иванова «Царь. XVI в.»"
        },
        {
          src: "images/result/fortress-4.jpg",
          alt: "Крепостной Арзамас, 4",
          caption: "Южный въезд, фото 1890х"
        }
      ]
    },

    merchant: {
      description: "Ваш Арзамас — купеческий. В центре этого образа торговля, деловая энергия, дома купцов и представление о городе как о месте обмена, расчёта и роста.",
      photos: [
        {
          src: "images/result/merchant-1.jpg",
          alt: "Купеческий Арзамас, 1",
          caption: "Торговый ряд"
        },
        {
          src: "images/result/merchant-2.jpg",
          alt: "Купеческий Арзамас, 2",
          caption: "Картина Сорокина С.А. «Старый Арзамас»"
        },
        {
          src: "images/result/merchant-6.jpg",
          alt: "Купеческий Арзамас, 6",
          caption: "Торговая лавка арзамасского купца Судьина Н.Л, 1900-1917"
        },
        {
          src: "images/result/merchant-3.webp",
          alt: "Купеческий Арзамас, 3",
          caption: "Старая усадьба"
        },
        {
          src: "images/result/merchant-4.jpg",
          alt: "Купеческий Арзамас, 4",
          caption: "Усадьба Попова, архитектор Корифинский М.П. 1812г."
        },
        {
          src: "images/result/merchant-5.jpg",
          alt: "Купеческий Арзамас, 5",
          caption: "Купеческие дома на ул.К.Маркса"
        }
      ]
    },

    spiritual: {
      description: "Ваш Арзамас — духовный. Для вас особенно важны храмы, благодарность, внутренний смысл городской истории и люди, которые воспринимали развитие города как служение.",
      photos: [
        {
          src: "images/result/spiritual-1.jpg",
          alt: "Духовный Арзамас, 1",
          caption: "Купола церкови Благовещения Пресвятой Богородицы"
        },
        {
          src: "images/result/spiritual-2.jpg",
          alt: "Духовный Арзамас, 2",
          caption: "1000 лет со дня крещения"
        },
        {
          src: "images/result/spiritual-3.webp",
          alt: "Духовный Арзамас, 3",
          caption: "Арзамасские церкви на закате"
        },
        {
          src: "images/result/spiritual-4.jpg",
          alt: "Духовный Арзамас, 4",
          caption: "Убранство Воскресенского собора"
        }
      ]
    },

    technical: {
      description: "Ваш Арзамас — технический. Важнее всего для вас инженерные решения, городская инфраструктура, механизмы и движение города к новому времени.",
      photos: [
        {
          src: "images/result/technical-1.jpg",
          alt: "Технический Арзамас, 1",
          caption: "Туристический паровоз из Нижнего Новгорода в Арзамас"
        },
        {
          src: "images/result/technical-2.jpg",
          alt: "Технический Арзамас, 2",
          caption: "Сотрудничество политехнического интситута и АПЗ"
        },
        {
          src: "images/result/technical-3.jpg",
          alt: "Технический Арзамас, 3",
          caption: "Арзамасский приборостроительный завод"
        },
        {
          src: "images/result/technical-4.jpg",
          alt: "Технический Арзамас, 4",
          caption: "Арзамасский машиностроительный завод"
        }
      ]
    },

    craft: {
      description: "Ваш Арзамас — ремесленный. В этом образе особенно важны ручной труд, профессия, точность работы и материальная культура, созданная мастерами.",
      photos: [
        {
          src: "images/result/craft-1.jpg",
          alt: "Ремесленный Арзамас, 1",
          caption: "Ррабочие скорняки."
        },
        {
          src: "images/result/craft-2.jpg",
          alt: "Ремесленный Арзамас, 2",
          caption: "Резьба ул.Космонавтов"
        },
        {
          src: "images/result/craft-3.webp",
          alt: "Ремесленный Арзамас, 3",
          caption: "Домик в женском арзамасском монастыре"
        },
        {
          src: "images/result/craft-4.jpg",
          alt: "Ремесленный Арзамас, 4",
          caption: "Икона преподобной Олимпиады Киевской и Арзамасской"
        },
        {
          src: "images/result/craft-5.png",
          alt: "Ремесленный Арзамас, 5",
          caption: "Роспись по сырой штукатурке в Воскресенском соборе"
        }

      ]
    },

    social: {
      description: "Ваш Арзамас — общественный. Для вас город складывается из совместных решений, участия горожан, сборов, инициатив и коллективной памяти.",
      photos: [
        {
          src: "images/result/social-1.jpg",
          alt: "Общественный Арзамас, 1",
          caption: "Работы волонтерского проекта «АСИРИС»"
        },
        {
          src: "images/result/social-2.jpg",
          alt: "Общественный Арзамас, 2",
          caption: "Заседание III Всероссийской научно-практической конференции «Вопросы исторического и экологического регионоведения»"
        },
        {
          src: "images/result/social-3.jpg",
          alt: "Общественный Арзамас, 3",
          caption: "Здание магистрата на Соборной площади"
        },
        {
          src: "images/result/social-4.jpg",
          alt: "Общественный Арзамас, 4",
          caption: "Заседание арзамасской городской думы 6 созыва"
        },
        {
          src: "images/result/social-5.jpg",
          alt: "Общественный Арзамас, 5",
          caption: "Члены городской думы XIX век"
        },
      ]
    },

    cultural: {
      description: "Ваш Арзамас — культурный. В этом образе главное — истории людей, их праздники и обыденная жизнь, что превращалась в могучее искусство и способность города выражать себя через форму.",
      photos: [
        {
          src: "images/result/cultural-1.jpg",
          alt: "Культурный Арзамас, 1",
          caption: "Празднование Рождества на Соборной площади"
        },
        {
          src: "images/result/cultural-2.jpg",
          alt: "Культурный Арзамас, 2",
          caption: "Культурный забег, 2025"
        },
        {
          src: "images/result/cultural-3.jpg",
          alt: "Культурный Арзамас, 3",
          caption: "Лыжный пробег, 1983-1989"
        },
        {
          src: "images/result/cultural-4.jpg",
          alt: "Культурный Арзамас, 4",
          caption: "Картина арзамасского художника Вершинина В.В."
        }
      ]
    }
  };

  const progressDoneEl = document.getElementById("progressDone");
  const progressBarEl = document.getElementById("progressBar");
  const finalTypeEl = document.getElementById("finalTypeValue");
  const finalHintEl = document.getElementById("finalHint");
  const showBtn = document.getElementById("showResultBtn");
  const resetBtn = document.getElementById("resetBtn");

  const resultMediaEl = document.getElementById("resultMedia");
  const resultDescriptionEl = document.getElementById("resultDescription");
  const resultImageEl = document.getElementById("resultImage");
  const resultCaptionEl = document.getElementById("resultCaption");
  const prevSlideBtn = document.getElementById("prevSlideBtn");
  const nextSlideBtn = document.getElementById("nextSlideBtn");

  const radios = Array.from(document.querySelectorAll('input[type="radio"][data-type]'));
  const dots = Array.from(document.querySelectorAll(".segbar__dot"));

  let currentSlides = [];
  let currentSlideIndex = 0;

  function getSelectedTypesByPuzzle() {
    const selected = new Map();
    const checked = radios.filter(r => r.checked);

    for (const r of checked) {
      selected.set(r.name, r.dataset.type);
    }

    return selected;
  }

  function calcScores(selectedMap) {
    const scores = {
      fortress: 0,
      merchant: 0,
      spiritual: 0,
      technical: 0,
      craft: 0,
      social: 0,
      cultural: 0
    };

    for (const [, type] of selectedMap.entries()) {
      if (type in scores) scores[type] += 1;
    }

    return scores;
  }

  function calcIndices(scores) {
    const idx = {};

    for (const k of Object.keys(scores)) {
      const max = MAX[k] || 0;
      idx[k] = max > 0 ? scores[k] / max : 0;
    }

    return idx;
  }

  function bestTypeOrChimera(indices) {
    let maxVal = -Infinity;

    for (const k of Object.keys(indices)) {
      if (indices[k] > maxVal) maxVal = indices[k];
    }

    const EPS = 1e-12;

    const winners = Object.keys(indices).filter(
      k => Math.abs(indices[k] - maxVal) < EPS
    );

    if (winners.length === 1) {
      return {
        kind: "single",
        types: [winners[0]],
        label: LABEL[winners[0]]
      };
    }

    if (winners.length === 2) {
      const sorted = winners.slice().sort();
      const pair = sorted.join("|");

      return {
        kind: "chimera",
        types: sorted,
        label: CHIMERA[pair] || `${LABEL[sorted[0]]} + ${LABEL[sorted[1]]}`
      };
    }

    return {
      kind: "multi",
      types: winners,
      label: winners.map(w => LABEL[w]).join(" • ") || "—"
    };
  }

  function updateProgressUI() {
    const selected = getSelectedTypesByPuzzle();
    const done = selected.size;
    const pct = Math.round((done / 6) * 100);

    progressDoneEl.textContent = done;
    progressBarEl.style.width = pct + "%";

    dots.forEach((dot, i) => {
      dot.classList.toggle("is-done", done >= (i + 1));
    });

    if (done < 6) {
      finalHintEl.textContent = `Выбрано ${done}/6. Чтобы увидеть итоговый образ, нужно выбрать все 6 пазлов.`;
    } else {
      finalHintEl.textContent = "Все 6 пазлов выбраны. Теперь можно показать итоговый образ.";
    }
  }

  function buildSlidesForTypes(types) {
    const slides = [];

    types.forEach(type => {
      const content = TYPE_CONTENT[type];
      if (!content || !Array.isArray(content.photos)) return;

      content.photos.forEach(photo => {
        slides.push({
          ...photo,
          type
        });
      });
    });

    return slides;
  }

  function buildDescription(result) {
    if (result.kind === "single") {
      const type = result.types[0];
      return TYPE_CONTENT[type]?.description || "";
    }

    if (result.kind === "chimera") {
      const descriptions = result.types
        .map(type => TYPE_CONTENT[type]?.description)
        .filter(Boolean);

      return descriptions.join(" ");
    }

    return "Ваш образ получился смешанным: в нём соединились сразу несколько линий истории Арзамаса.";
  }

  function renderSlide() {
    if (!currentSlides.length) {
      resultMediaEl.hidden = true;
      return;
    }

    const slide = currentSlides[currentSlideIndex];

    resultImageEl.src = slide.src;
    resultImageEl.alt = slide.alt || "";
    resultCaptionEl.textContent = slide.caption || "";

    prevSlideBtn.disabled = currentSlideIndex === 0;
    nextSlideBtn.disabled = currentSlideIndex === currentSlides.length - 1;

    resultMediaEl.hidden = false;
  }

  function showResult() {
    const selected = getSelectedTypesByPuzzle();
    const done = selected.size;

    if (done < 6) {
      finalTypeEl.textContent = "—";
      finalHintEl.textContent = `Сейчас выбрано ${done}/6. Чтобы показать образ Арзамаса, нужно выбрать все 6 пазлов.`;
      resultMediaEl.hidden = true;
      return;
    }

    const scores = calcScores(selected);
    const indices = calcIndices(scores);
    const res = bestTypeOrChimera(indices);

    finalTypeEl.textContent = res.label;
    finalHintEl.textContent = "Итог готов.";

    resultDescriptionEl.textContent = buildDescription(res);

    currentSlides = buildSlidesForTypes(res.types);
    currentSlideIndex = 0;
    renderSlide();
  }

  function resetAll() {
    radios.forEach(r => r.checked = false);

    finalTypeEl.textContent = "—";
    finalHintEl.textContent = "Заполните все 6 точек — так результат будет точнее.";

    currentSlides = [];
    currentSlideIndex = 0;
    resultMediaEl.hidden = true;
    resultImageEl.src = "";
    resultImageEl.alt = "";
    resultCaptionEl.textContent = "";
    resultDescriptionEl.textContent = "";

    updateProgressUI();
  }

  function showPrevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex -= 1;
      renderSlide();
    }
  }

  function showNextSlide() {
    if (currentSlideIndex < currentSlides.length - 1) {
      currentSlideIndex += 1;
      renderSlide();
    }
  }

  radios.forEach(r => {
    r.addEventListener("change", updateProgressUI);
  });

  showBtn.addEventListener("click", showResult);
  resetBtn.addEventListener("click", resetAll);
  prevSlideBtn.addEventListener("click", showPrevSlide);
  nextSlideBtn.addEventListener("click", showNextSlide);

  updateProgressUI();

})();