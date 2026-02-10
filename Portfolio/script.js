function demo() {
  const data = ["Project A", "Project B", "Project C"];
  console.log("Projects loaded:", data);
  alert("Projects loaded! Check console for details.");
}

const buttons = document.querySelectorAll(".nav");
const content = document.getElementById("content");

const tabsContent = {
  html: `
<div class="section">
  <h2>HTML – Semantic Structure</h2>
  <p>
    Project focused on accessibility, semantic elements, and structured layouts.
  </p>
  <pre>
&lt;main&gt;
  &lt;section aria-labelledby="dashboard"&gt;
    &lt;h2 id="dashboard"&gt;Dashboard&lt;/h2&gt;
    &lt;article&gt;
      &lt;header&gt;Overview&lt;/header&gt;
      &lt;p&gt;User activity summary.&lt;/p&gt;
    &lt;/article&gt;
  &lt;/section&gt;
&lt;/main&gt;
  </pre>
</div>
`,
  css: `
<div class="section">
  <h2>CSS – Layout & Responsiveness</h2>
  <p>
    Responsive UI using Flexbox, spacing system, and transitions.
  </p>
  <pre>
.layout {
  display: flex;
  min-height: 100vh;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
  </pre>
</div>
`,
js: `
<div class="section">
  <h2>JavaScript – Data Handling</h2>
  <p>
    Dynamic content loading and state management.
  </p>
  <button>Run Example</button>
  <pre>
function demo() {
  const data = ["Project A", "Project B", "Project C"];
  console.log("Projects loaded:", data);
}
  </pre>
</div>
`,
  mysql: `
<div class="section">
  <h2>MySQL – Relational Design</h2>
  <p>
    Normalized schema with constraints and junction tables.
  </p>
  <pre>
CREATE TABLE submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  assignment_id INT NOT NULL,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, assignment_id)
);
  </pre>
</div>
`,
  java: `
<div class="section">
  <h2>Java – Object-Oriented Design</h2>
  <p>
    Encapsulation, constructors, and domain modeling.
  </p>
  <pre>
public class Course {
  private String code;
  private int credits;

  public Course(String code, int credits) {
    this.code = code;
    this.credits = credits;
  }

  public int getCredits() {
    return credits;
  }
}
  </pre>
</div>
`
};

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    setActive(btn);
    loadTab(btn.dataset.tab);
  });
});

function setActive(activeBtn) {
  buttons.forEach(btn => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}

function loadTab(tab) {
  content.innerHTML = tabsContent[tab] || "<p>Error loading content.</p>";

  const btn = content.querySelector("button");
  if (btn) {
    btn.addEventListener("click", demo);
  }
}


loadTab("html");
