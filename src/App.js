const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Havanese"),
  ]);
};

const App = () => {
  return React.createElement("div", { class: "whatever" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Cockatiel",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
