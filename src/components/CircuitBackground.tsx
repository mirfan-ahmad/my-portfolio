import React from 'react';

export function CircuitBackground() {
  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <g className="text-green-400">
              {/* Horizontal lines */}
              <line x1="0" y1="50" x2="200" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.6">
                <animate attributeName="stroke-dasharray" values="0,10;10,0" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="0" y1="150" x2="200" y2="150" stroke="currentColor" strokeWidth="2" opacity="0.4">
                <animate attributeName="stroke-dasharray" values="10,0;0,10" dur="4s" repeatCount="indefinite" />
              </line>
              
              {/* Vertical lines */}
              <line x1="50" y1="0" x2="50" y2="200" stroke="currentColor" strokeWidth="2" opacity="0.3">
                <animate attributeName="stroke-dasharray" values="0,15;15,0" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="150" y1="0" x2="150" y2="200" stroke="currentColor" strokeWidth="2" opacity="0.5">
                <animate attributeName="stroke-dasharray" values="15,0;0,15" dur="3.5s" repeatCount="indefinite" />
              </line>
              
              {/* Circuit nodes */}
              <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.7">
                <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="150" r="3" fill="currentColor" opacity="0.5">
                <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="150" cy="50" r="3" fill="currentColor" opacity="0.4">
                <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="50" cy="150" r="2" fill="currentColor" opacity="0.6">
                <animate attributeName="r" values="2;4;2" dur="1.8s" repeatCount="indefinite" />
              </circle>
              
              {/* Diagonal connections */}
              <line x1="50" y1="50" x2="150" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.3">
                <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="5s" repeatCount="indefinite" />
              </line>
              <line x1="150" y1="50" x2="50" y2="150" stroke="currentColor" strokeWidth="1" opacity="0.2">
                <animate attributeName="stroke-dasharray" values="20,0;0,20" dur="4.5s" repeatCount="indefinite" />
              </line>
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
}