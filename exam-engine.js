
const qs = window.EXAM_1_QUESTIONS || [];
const state = {
  mode: new URLSearchParams(location.search).get("mode") || "practice",
  index: 0,
  answers: {},
  checked: {},
  startedAt: Date.now(),
  duration: 90 * 60
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function byDomain() {
  return qs.reduce((acc, q) => {
    acc[q.domain] = (acc[q.domain] || 0) + 1;
    return acc;
  }, {});
}

function initLanding() {
  const domainCounts = byDomain();
  $("#domainStats").innerHTML = Object.entries(domainCounts).map(([d,c]) =>
    `<div class="domain-row"><span>${d}</span><strong>${c} questions</strong></div>`
  ).join("");
  $("#startPractice").href = "exam-1.html?mode=practice";
  $("#startExam").href = "exam-1.html?mode=exam";
}

function initExam() {
  $("#modeLabel").textContent = state.mode === "exam" ? "Timed Exam Mode" : "Practice Mode";
  $("#questionTotal").textContent = qs.length;
  if (state.mode === "practice") {
    $("#timerWrap").classList.add("hidden");
  } else {
    setInterval(tick, 1000);
    tick();
  }
  renderMap();
  renderQuestion();
}

function tick() {
  const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  const left = Math.max(0, state.duration - elapsed);
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  $("#timer").textContent = `${m}:${s}`;
  if (left === 0) finishExam();
}

function renderMap() {
  $("#questionMap").innerHTML = qs.map((q, i) => {
    const answered = state.answers[q.id]?.length;
    const active = i === state.index;
    return `<button class="map-btn ${active ? "active" : ""} ${answered ? "answered" : ""}" data-i="${i}">${i+1}</button>`;
  }).join("");
  $$(".map-btn").forEach(btn => btn.onclick = () => {
    state.index = Number(btn.dataset.i);
    renderQuestion();
    renderMap();
  });
}

function renderQuestion() {
  const q = qs[state.index];
  $("#qNum").textContent = state.index + 1;
  $("#qDomain").textContent = q.domain;
  $("#qTopic").textContent = q.topic;
  $("#qDifficulty").textContent = q.difficulty;
  $("#qChoose").textContent = `Choose ${q.choose}`;
  $("#qText").textContent = q.question;

  const selected = state.answers[q.id] || [];
  $("#answers").innerHTML = q.options.map((opt, i) => `
    <label class="option ${selected.includes(i) ? "selected" : ""}">
      <input type="${q.choose > 1 ? "checkbox" : "radio"}" name="answer" value="${i}" ${selected.includes(i) ? "checked" : ""}>
      <span>${opt}</span>
    </label>
  `).join("");

  $$("#answers input").forEach(input => {
    input.onchange = () => {
      let vals = $$("#answers input:checked").map(x => Number(x.value));
      if (q.choose === 1 && vals.length > 1) vals = [Number(input.value)];
      if (vals.length > q.choose) {
        input.checked = false;
        vals = $$("#answers input:checked").map(x => Number(x.value));
      }
      state.answers[q.id] = vals;
      renderQuestion();
      renderMap();
    };
  });

  $("#feedback").classList.add("hidden");
  $$(".option").forEach(el => el.classList.remove("correct","wrong"));
  if (state.mode === "practice" && state.checked[q.id]) showFeedback();

  $("#prevBtn").disabled = state.index === 0;
  $("#nextBtn").textContent = state.index === qs.length - 1 ? "Finish" : "Next";
  $("#checkBtn").classList.toggle("hidden", state.mode === "exam");
}

function arraysEqual(a,b) {
  return [...a].sort().join(",") === [...b].sort().join(",");
}

function showFeedback() {
  const q = qs[state.index];
  const selected = state.answers[q.id] || [];
  const correct = arraysEqual(selected, q.correct);
  $("#feedback").className = `feedback ${correct ? "ok" : "bad"}`;
  $("#feedbackTitle").textContent = correct ? "Correct" : "Review this";
  $("#correctAnswer").innerHTML = q.correct.map(i => `<li>${q.options[i]}</li>`).join("");
  $("#why").textContent = q.trap;
  $("#memory").textContent = q.memory;
  $("#feedback").classList.remove("hidden");

  $$(".option").forEach((el, i) => {
    el.classList.toggle("correct", q.correct.includes(i));
    el.classList.toggle("wrong", selected.includes(i) && !q.correct.includes(i));
  });
}

function checkAnswer() {
  const q = qs[state.index];
  state.checked[q.id] = true;
  showFeedback();
  renderMap();
}

function nextQuestion() {
  if (state.index === qs.length - 1) return finishExam();
  state.index++;
  renderQuestion();
  renderMap();
  window.scrollTo({top: 0, behavior: "smooth"});
}

function prevQuestion() {
  if (state.index > 0) {
    state.index--;
    renderQuestion();
    renderMap();
  }
}

function finishExam() {
  let correct = 0;
  qs.forEach(q => {
    if (arraysEqual(state.answers[q.id] || [], q.correct)) correct++;
  });
  const pct = Math.round((correct / qs.length) * 100);
  const byDom = {};
  qs.forEach(q => {
    if (!byDom[q.domain]) byDom[q.domain] = {total:0, correct:0};
    byDom[q.domain].total++;
    if (arraysEqual(state.answers[q.id] || [], q.correct)) byDom[q.domain].correct++;
  });

  document.body.innerHTML = `
    <main class="shell result-shell">
      <a class="back" href="csa.html">← back to CSA home</a>
      <section class="result-card">
        <p class="eyebrow">Exam 1 Result</p>
        <h1>${pct}%</h1>
        <p>${correct}/${qs.length} correct</p>
        <div class="result-status ${pct >= 75 ? "pass" : "fail"}">${pct >= 75 ? "PASS" : "REVIEW NEEDED"}</div>
      </section>
      <section class="card">
        <h2>Domain breakdown</h2>
        ${Object.entries(byDom).map(([d,v]) => {
          const p = Math.round((v.correct/v.total)*100);
          return `<div class="domain-row"><span>${d}</span><strong>${p}%</strong></div>`;
        }).join("")}
      </section>
      <a class="primary" href="exam-1.html?mode=practice">Review in Practice Mode</a>
    </main>`;
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.page === "landing") initLanding();
  if (document.body.dataset.page === "exam") {
    $("#checkBtn").onclick = checkAnswer;
    $("#nextBtn").onclick = nextQuestion;
    $("#prevBtn").onclick = prevQuestion;
    $("#finishBtn").onclick = finishExam;
    initExam();
  }
});
