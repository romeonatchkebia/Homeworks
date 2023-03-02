const container = document.getElementById("container");

const fetchData = async () => {
  let fetchedData = await fetch("https://api.github.com/users");
  let response = await fetchedData.json();

  container.innerHTML = response.map((item) => cardRenderer(item)).join("");

  const btn = document.querySelectorAll(".button");
  let btns = [...btn];
  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      userPosts(index + 1);
    });
  });
};

const userPosts = async (num) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${num}`
  );
  const res = await data.json();
  console.log(res);
};

const cardRenderer = (item) => {
  return `<div class="wrapper">
    <div class="header">
      <div>
        <img id="img" src="${item.avatar_url}" alt="" />
      </div>

      <div>
        <div><p>${item.login}</p></div>
        <div><p>${item.html_url}</p></div>
      </div>
    </div>

    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        facere vel officiis! In, obcaecati nobis.
      </p>
    </div>

    <div class="button"><button>Show Details</button></div>
  </div>`;
};

fetchData();
