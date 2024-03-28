var arr = [
    {
        dp: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",

        story: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
    },


    {
        dp: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",

        story: "https://images.unsplash.com/photo-1604436154692-5f99b849232c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    },


    {
        dp: "https://images.unsplash.com/photo-1604514649606-2fdd0399de88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",

        story: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
    },


    {
        dp: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",

        story: "https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
];

  
  const storiyan = document.querySelector("#storiyan");
  let clutter = "";
  
  arr.forEach(function (elem, idx) {
    clutter += `<div class="story"><img id="${idx}" src="${elem.dp}" alt=""></div>`;
  });
  
  storiyan.innerHTML = clutter;
  
  storiyan.addEventListener("click", function (dets) {
    const img = dets.target;
    if (img.tagName.toLowerCase() === "img") {
      document.querySelector("#full-screen").style.display = "block";
      document.querySelector("#full-screen").style.backgroundImage = `url(${arr[img.id].story})`;
  
      setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none";
      }, 3000);
    }
  });