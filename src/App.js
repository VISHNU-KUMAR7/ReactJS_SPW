import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="background-color: red"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          >
            <img src="images/logo.png" width="180px" alt="Navbar" /></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >About us</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Client</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Web</a></li>
                <li><a class="dropdown-item" href="#">App</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">SEO</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link">Contact Us</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    {/* <!-- slider --> */}
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp"
            class="d-block w-100"
            alt="..."
            width="150"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVw-hIXKx08P5HRv9FgKbPQp_66oJbAmA5a5s3KbCljisRArkiwGJgY9Qa_DzQFf24SE&usqp=CAU"
            class="d-block w-100"
            alt="..."
            width="150"
          />
        </div>
        <div class="carousel-item">
          <img
            src="data:image/jpeg;base64,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"
            class="d-block w-100"
            alt="..."
            width="150"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container-fluid">
      {/* <!-- tagline --> */}
      <div class="row">
        <div class="col-12">
          <h3 class="display-6 text-center mt-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            reprehenderit eveniet maxime eius aut consecte
          </h3>
        </div>
      </div>

      {/* <!-- feture --> */}
      <div class="row justify-content-evenly pt-4 pb-3">
        <div class="col-md-3 text-center mt-5">
          <h1><i class="bi bi-tv-fill text-primary"></i></h1>
          <h5>Lorem ipsum dolor sit, amet consectetur adipi</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            neque, inventore soluta repudiandae dolorem
          </p>
        </div>
        <div class="col-md-3 text-center mt-5">
          <h1><i class="bi bi-twitter text-danger"></i></h1>
          <h5>Lorem ipsum dolor sit, amet consectetur adipi</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            neque, inventore soluta repudiandae dolorem
          </p>
        </div>
        <div class="col-md-3 text-center mt-5">
          <h1><i class="bi bi-skip-forward-circle-fill text-info"></i></h1>
          <h5>Lorem ipsum dolor sit, amet consectetur adipi</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            neque, inventore soluta repudiandae dolorem
          </p>
        </div>
      </div>

      <hr />

      <div class="row justify-content-evenly pt-3 pb-4">
        <div class="col-md-5 pt-3">
          <img
            src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
            class="img-fluid"
            alt="image"
          />
        </div>

        <div class="col-md-5 pt-3">
          <h5 class="mt-3">Website Development</h5>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style="width: 25%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <h5 class="mt-3">App Development</h5>
          <div class="progress">
            <div
              class="progress-bar bg-info"
              role="progressbar"
              style="width: 50%"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <h5 class="mt-3">Software Development</h5>
          <div class="progress">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style="width: 75%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <h5 class="mt-3">SEo</h5>
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              style="width: 100%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <h5 class="mt-3">Marketing</h5>
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              style="width: 100%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      {/* <!-- contact --> */}
      <div
        class="row justify-content-evenly pt-2 pb-5"
        style="background-color: #f1f1f1"
      >
        <div class="col-md-5 mt-5">
          <h1 class="display-6">Contact Form</h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Check me out</label
              >
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-5 mt-5">
          <h1 class="mb-4">Address</h1>
          <p>
            1180 Kimberly Way,<br />
            WILLISTON PARK New York -<br />
            <i class="bi bi-telephone"></i> : 11596 :917-772-5081
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814518.1027026586!2d78.27010752500003!3d20.9880134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x207b4eb926b84e45%3A0x742cf4656da6f70c!2sStylovion!5e0!3m2!1sen!2sin!4v1653235063508!5m2!1sen!2sin"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style=" width: 100%"
          ></iframe>
        </div>
      </div>

      <div class="row justify-content-evenly pt-5 pb-5">
        <div class="col-md-10">
          <h3 class="text-center pb-4">FAQ</h3>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item border">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item border">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item border">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer --> */}
      <div class="row justify-content-evenly bg-dark text-white pt-3 pd-3">
        <div class="col-md-3 pt-3">
          <h5 class="pb-3">Tech Gun</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            quaerat quas similique dolores nisi commodi fugiat! Molestiae,
            ipsum.
          </p>
        </div>
        <div class="col-md-3 pt-3">
          <h5 class="display-6 pb-2">Important Liks</h5>
          <p>
            <a href="#" class="link-light text-decoration-none"> Home</a> <br />
            <a href="#" class="link-light text-decoration-none"> About us</a>
            <br />
            <a href="#" class="link-light text-decoration-none"> Contact us</a>
            <br />
            <a href="#" class="link-light text-decoration-none"> Our Team</a>
            <br />
            <a href="#" class="link-light text-decoration-none"> Our Client</a>
            <br />
          </p>
        </div>
        <div class="col-md-3 pt-3">
          <h5 class="display-6 pb-2">Contact us</h5>
          <p>
            1180 Kimberly Way,<br />
            WILLISTON PARK New York -<br />
            <i class="bi bi-telephone"></i> : 11596 :917-772-5081
          </p>
        </div>
      </div>

      {/* <!-- copyright--> */}

      <div class="row bg-black text-white text-center pt-2 pb-3">
        <div class="col-12">
          <p>copyright 345-2345</p>
        </div>
      </div>
      {/* <!-- container end --> */}
    </div></>
  );
}

export default App;
