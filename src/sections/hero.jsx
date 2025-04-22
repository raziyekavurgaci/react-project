function Hero() {
  return (
    <header className="py-5 bg-light text-center mt-5 mx-5">
      <div className="container-fluid p-5 ">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10">
            <h1 className="display-4 fw-bold mb-4">A warm welcome!</h1>
            <p className="fs-4 mb-4">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a href="#features" className="btn btn-primary btn-lg me-2">
              Call to action
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
