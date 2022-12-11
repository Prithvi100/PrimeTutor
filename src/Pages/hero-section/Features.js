const Features = () => {
  return (
    <div>
      <section class="pt-28 pb-44 bg-white overflow-hidden">
        <div class="container">
          <div class="row align-items-center g-16">
            <div class="col-12 col-md-6">
              <div
                class="p-6 bg-black mx-auto"
                //style="background: linear-gradient(98.24deg, #FFB36D 0%, #EC5353 100%); max-width: 470px; height: 382px; border-radius: 25px;"
              >
                {/* insert image here */}
                <img
                  class="img-fluid"
                  src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0dWR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="mw-xl">
                <h1 class="fs-10 mb-6 lh-sm">
                  World-Class Instructors, specifically for you
                </h1>
                <p class="mb-20 text-muted mw-md-md">
                  Got a big test coming up? Want to learn something new? We got
                  you!
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="d-flex align-items-center px-0 fw-bold list-group-item border-0 mb-1">
                  <img class="me-3" src="../../assets/check-green.svg" alt="" />
                  <h3 class="fs-17 fw-semibold mb-0">
                    Instructors specific to your classes
                  </h3>
                </li>
                <li class="d-flex align-items-center px-0 fw-bold list-group-item border-0 mb-1">
                  <img class="me-3" src="../../assets/check-green.svg" alt="" />
                  <h3 class="fs-17 fw-semibold mb-0">
                    Instant contact &amp; Scheduling
                  </h3>
                </li>
                <li class="d-flex align-items-center px-0 fw-bold list-group-item border-0">
                  <img class="me-3" src="../../assets/check-green.svg" alt="" />
                  <h3 class="fs-17 fw-semibold mb-0">
                    Book, edit, &amp; collaborate with educators online
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
