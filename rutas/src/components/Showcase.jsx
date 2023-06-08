import React from 'react'

export const Showcase = () => {
  return (
    // <!-- START SHOWCASE -->

    <section className="bg-dark text-light p-5 text-center text-sm-start">
  <div className="container">
    <div className="d-sm-flex align-items-center justify-content-between">
      <div>
        <h1>Disfruta de las <span className="text-warning">Mejores Recetas</span></h1>
        <p className="lead">
          Haz parte y disfruta de todas las recetas que tenemos para ti.
        </p>
        {/* <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#enroll">Iniciar la
          Inscripción</button> */}
      </div>
      <video controls
        src="./img/video.mp4" alt="video" className="video-fluid w-50 d-none d-sm-block" autoPlay loop type="video/mp4" />
    </div>
  </div>
</section>


    // <!-- END SHOWCASE -->
  )
}
