let data = [];

function addData(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("input-blog-image").files;

  if (name == "") {
    return alert("Judul tidak boleh kosong!");
  } else if (description == "") {
    return alert("Deskripsi tidak boleh kosong!");
  } else if (image.length == 0) {
    return alert("gambar tidak boleh kosong!");
  }

  var gambar = URL.createObjectURL(image[0]);

  // Checkbox
  let input_tech = document.getElementsByClassName("input_tech");
  let technologies = [];
  for (let index = 0; index < input_tech.length; index++) {
    if (input_tech[index].checked) {
      let techIconHTML = `<span class="icon-list">
		<img src="Assets/icon/${input_tech[index].value}.png" alt="Icon" />
	</span>`;
      technologies.push(techIconHTML);
    }
    console.log(technologies);
  }

  let blog = {
    name,
    description,
    gambar,
    technologies,
  };

  data.push(blog);
  console.log(blog);
  rederBlog();
}

function rederBlog() {
  document.getElementById("list-content").innerHTML = ``;
  for (let index = 0; index < data.length; index++) {
    document.getElementById("list-content").innerHTML += `
    <div class="card-list" ">
        <div class="row">
              <div class="isi-card">
              <a href="detail.html">
                <img src="${data[index].gambar}" class="card-img" alt="">
                <h3>${data[index].name}</h3>
                <p class="durasi">Durasi: </p>
                <p class="description">${data[index].description}</p>
                <div class="icon-image">
                ${data[index].technologies.join(" ")}
                </div>
                </a>
                <div class="btn-bawah">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
            </div>
          </div>
      </div>`;
  }
}
