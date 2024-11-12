import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
    };

    this.buttons = [
      { id: 1, label: "7", value: "7" },
      { id: 2, label: "8", value: "8" },
      { id: 3, label: "9", value: "9" },
      { id: 4, label: "/", value: "/" },

      { id: 5, label: "4", value: "4" },
      { id: 6, label: "5", value: "5" },
      { id: 7, label: "6", value: "6" },
      { id: 8, label: "-", value: "-" },

      { id: 9, label: "1", value: "1" },
      { id: 10, label: "2", value: "2" },
      { id: 11, label: "3", value: "3" },
      { id: 12, label: "+", value: "+" },

      { id: 13, label: "0", value: "0" },
      { id: 14, label: ".", value: "." },
      { id: 14, label: "*", value: "*" },
      { id: 15, label: "=", value: "=" },
    ];
  }

  handleClick = (button) => {
    const { output } = this.state;

    if (button.value === "=") {
      this.doCalculation(output);
      return;
    }

    // Ajouter le valeur du bouton à l'output
    this.setState({ output: `${output}${button.value}` });
  };

  clearOutput = () => {
    this.setState({ output: "" });
  };

  doCalculation = (content) => {
    if (content === "") {
      alert("Vous n'avez saisi aucune opération");
      return;
    }

    try {
      // Évaluer l'expression mathématique
      let result = eval(content);
      this.setState({ output: result }); // Afficher le résultat dans le champ de sortie
    } catch (error) {
      alert("Erreur dans l'expression");
    }
  };

  render() {
    return (
      <div className="main">
        <h2>Calculatrice</h2>
        <div className="calculatrice">
          <div className="header">
            <input type="text" readOnly value={this.state.output} />
            <button onClick={this.clearOutput}>Effacer</button>
          </div>
          <div className="content">
            {this.buttons.map((button) => {
              return (
                <button
                  onClick={() => this.handleClick(button)}
                  key={button.id}
                  value={button.value}
                >
                  {button.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
