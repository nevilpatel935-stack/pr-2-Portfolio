import React from "react";

function Work() {
  const cars = [
    {
      name: "Mahindra Scorpio",
      brand: "Mahindra",
      price: "₹13.62 - 17.50 Lakh",
      description: "A powerful SUV designed for adventure."
    },
    {
      name: "Tata Nexon",
      brand: "Tata",
      price: "₹7.32 - 14.15 Lakh",
      description: "A stylish SUV with modern features."
    },
    {
      name: "Mahindra Thar",
      brand: "Mahindra",
      price: "₹9.99 - 16.99 Lakh",
      description: "An iconic SUV built for off-road driving."
    },
    {
      name: "Maruti Suzuki Swift",
      brand: "Maruti Suzuki",
      price: "₹5.79 - 8.80 Lakh",
      description: "A compact car with sporty performance."
    },
    {
      name: "Tata Harrier",
      brand: "Tata",
      price: "₹14.99 - 25.25 Lakh",
      description: "A premium SUV with bold styling."
    },
    {
      name: "Mahindra XUV700",
      brand: "Mahindra",
      price: "₹13.66 - 23.71 Lakh",
      description: "A premium SUV with advanced technology."
    }
  ];

  return (
    <section id="cars" className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Popular Indian Cars</h2>
          <p className="text-muted">
            Explore some of India's most popular cars.
          </p>
        </div>

        <div className="row g-4">

          {cars.map((car, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm car-card">
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-3">
                    {car.brand}
                  </span>

                  <h4 className="card-title fw-bold">
                    {car.name}
                  </h4>

                  <p className="card-text text-muted">
                    {car.description}
                  </p>

                  <h5 className="text-danger">
                    {car.price}
                  </h5>

                  <button className="btn btn-dark mt-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Work;