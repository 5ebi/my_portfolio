export default function TechStack() {
  const skills = [
    { name: 'REACT / NEXT.JS', level: 90, category: 'FRONTEND' },
    { name: 'TYPESCRIPT', level: 88, category: 'FRONTEND' },
    { name: 'REACT_NATIVE / EXPO', level: 80, category: 'MOBILE' },
    { name: 'NODE.JS', level: 75, category: 'BACKEND' },
    { name: 'POSTGRESQL', level: 70, category: 'BACKEND' },
    { name: 'HTML / CSS', level: 92, category: 'FRONTEND' },
  ];

  return (
    <section className="stack" id="stack">
      <div className="stackInner">
        <div className="stackHeader">
          <span className="sectionLabel">[ TECH_CAPABILITIES ]</span>
          <h2 className="sectionHeading">
            ENGINEERING
            <br />
            STACK
          </h2>
          <p className="stackDescription">
            A focused selection of technologies optimized for performance,
            developer experience, and shipping fast.
          </p>
        </div>

        <div className="stackGrid">
          {skills.map((skill) => (
            <div key={skill.name} className="stackItem">
              <div className="stackItemHeader">
                <span className="stackName">{skill.name}</span>
                <span className="stackLevel">{skill.level}%</span>
              </div>
              <div className="stackBar">
                <div
                  className="stackBarFill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="stackCategory">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
