async function fetchDataUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    const container = document.getElementById("container");
    data.forEach((el) => {
      const nameParagraph = document.createElement("h3");
      nameParagraph.textContent = el.name;
      container.appendChild(nameParagraph);
      const phoneParagraph = document.createElement("p");
      phoneParagraph.textContent = el.phone;
      container.appendChild(phoneParagraph);
      const compNameParagraph = document.createElement("div");
      compNameParagraph.textContent = el.company.name;
      container.appendChild(compNameParagraph);
    });
  } catch (error) {
    console.log(error);
  }
}
fetchDataUsers();
