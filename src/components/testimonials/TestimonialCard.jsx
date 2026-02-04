import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, avatar, rating = 5, delay = 0 }) => {
  return (
    <div 
      className="testimonial-card" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="quote-icon">"</div>
      
      <div className="rating-bar">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={`star ${i < rating ? '' : 'text-gray-600 opacity-30'}`} 
            fill={i < rating ? "#fbbf24" : "none"}
          />
        ))}
      </div>

      <p className="testimonial-content">
        {quote}
      </p>

      <div className="testimonial-footer">
        <img src={avatar} alt={name} className="user-avatar" />
        <div className="user-info">
          <div className="user-name">
            {name}
            <CheckCircle className="verified-badge" fill="currentColor" />
          </div>
          <span className="user-role">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
