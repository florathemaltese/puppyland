// CardsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Button from './Button';

function CardsPage() {
  return (
    <div>
      <h1>Famous Alumni</h1>
      <section className="cards">

        <article className="card">
          <div className="img-wrapper">
            <img src="/images/lawyer.jpg" alt="Lawyer Fluffy" />
          </div>
          <h3>Lawyer Fluffy</h3>
          <p>Lawyer Fluffy, the Maltese puppy, is known for winning cases with his adorable yet assertive bark in the courtroom.</p>

          <Link to="/other-page" style={{ textDecoration: 'none' }}><Button visual="link">Recent News</Button></Link>
          <Link to="/other-page" style={{ textDecoration: 'none' }}><Button visual="button">Read More</Button></Link>
        </article>


        <article className="card">
          <div className="img-wrapper">
            <img src="/images/pilot.jpg" alt="Pilot Barkley" />
          </div>
          <h3>Pilot Barkley</h3>
          <p>Pilot Barkley, the tiny Maltese puppy, is known for flying paper planes in the town of Airville.</p>
        </article>

 
        <article className="card">
          <div className="img-wrapper">
            <img src="/images/dancer.jpg" alt="Dancer Snowball" />
          </div>
          <h3>Dancer Snowball</h3>
          <p>Dancer Snowball, the Maltese puppy, enchants the town of Winterfell with her magical snow ballets.</p>
        </article>
      </section>
    </div>
  );
}

export default CardsPage;

  