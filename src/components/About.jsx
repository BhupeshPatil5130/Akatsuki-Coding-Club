const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-cover bg-center text-gray-800"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute inset-0 bg-gray-100 bg-opacity-20 z-10"></div>
      <div className="relative z-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold mb-6">About Us</h2>
          <div className="flex justify-center">
            <a href="index.html">
              <img
                src="https://res.cloudinary.com/dwiujlec2/image/upload/v1696529273/Akatsuki/img/SES_u4lfau.png"
                alt="About Us Logo"
                className="max-w-lg max-h-60"
              />
            </a>
          </div>
        </div>
        <div className="text-center max-w-8xl mx-auto">
          <p className="text-[22px] text-center ">
            Akatsuki is a coding club created by students of TY COMP in 2021.
            The creation of this club has been in the works ever since our First
            Year in the college and finally with a lot of help and support from
            Faculty Members and Juniors we were able to make it a reality. This
            club aspires to help students across the Institute to become the
            best versions of themselves and develop their skillset while having
            a place to consult with their Seniors and Alumni.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
