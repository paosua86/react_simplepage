import React from 'react';
import './conocenos_section.css';

class Testimonios extends React.Component {
  render() {
    return (
      <section className="conocenos" id="conocenos">
        <h2 className="heading">Nuestros clientes nos avalan</h2>
        <div className="tweet-carousel">
          <div className="tweet-card">
            <div className="tweet-header">
              <img src="https://via.placeholder.com/48x48" alt="User Avatar" />
              <div>
                <p className="tweet-username">John Doe</p>
                <p className="tweet-handle">@johndoe</p>
              </div>
            </div>
            <div className="tweet-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis augue metus. Nulla vitae enim purus. Curabitur eget augue ut velit hendrerit consectetur eu at metus. Vestibulum a lorem ut nulla porttitor placerat.
              </p>
            </div>
            <div className="tweet-footer">
              <p>10:30 PM - 15 Mar 2023</p>
              <i className="bx bxs-share-alt"></i>
              <i className="bx bxs-heart"></i>
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <img src="https://via.placeholder.com/48x48" alt="User Avatar" />
              <div>
                <p className="tweet-username">John Doe</p>
                <p className="tweet-handle">@johndoe</p>
              </div>
            </div>
            <div className="tweet-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis augue metus. Nulla vitae enim purus. Curabitur eget augue ut velit hendrerit consectetur eu at metus. Vestibulum a lorem ut nulla porttitor placerat.
              </p>
            </div>
            <div className="tweet-footer">
              <p>10:30 PM - 15 Mar 2023</p>
              <i className="bx bxs-share-alt"></i>
              <i className="bx bxs-heart"></i>
            </div>
          </div>
          <div className="tweet-card">
            <div className="tweet-header">
              <img src="https://via.placeholder.com/48x48" alt="User Avatar" />
              <div>
                <p className="tweet-username">John Doe</p>
                <p className="tweet-handle">@johndoe</p>
              </div>
            </div>
            <div className="tweet-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis augue metus. Nulla vitae enim purus. Curabitur eget augue ut velit hendrerit consectetur eu at metus. Vestibulum a lorem ut nulla porttitor placerat.
              </p>
            </div>
            </div>
            </div>
            </section>
         );
    }
}

export default Testimonios;
