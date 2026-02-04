import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

const ProductCard = ({ 
  name, 
  role, 
  description, 
  logo, 
  url, 
  delay = 0 
}) => {
  return (
    <div 
      className="product-card" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="product-glow"></div>
      
      <div className="product-header">
        <div className="product-logo-container">
          <img src={logo} alt={name} className="product-logo" />
        </div>
        <div className="product-title-group">
          <h3 className="product-name">{name}</h3>
          <span className="product-role">{role}</span>
        </div>
      </div>

      <div className="product-body">
        <p className="product-description">
          {description}
        </p>
        
        <div className="product-features">
          <div className="feature-pill">
            <ShieldCheck size={14} />
            <span>Verified Partner</span>
          </div>
        </div>
      </div>

      <div className="product-footer">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="product-action-btn"
        >
          <span>Visit Website</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
