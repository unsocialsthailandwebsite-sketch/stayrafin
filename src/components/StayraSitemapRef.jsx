import React, { useState } from 'react';
import { Home, Building2, Sparkles, Info, PlusCircle, FileText, Shield, Mail, ChevronDown, ChevronRight } from 'lucide-react';

const SitemapNode = ({ icon: Icon, title, url, children, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  
  const hasChildren = children && children.length > 0;
  const indent = level * 24;
  
  return (
    <div className="mb-1">
      <div 
        className="flex items-center gap-2 py-2 px-3 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer group"
        style={{ marginLeft: `${indent}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren && (
          <div className="text-gray-400">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
        )}
        {!hasChildren && <div className="w-4" />}
        
        <Icon className="text-amber-600" size={18} />
        
        <div className="flex-1">
          <div className="font-medium text-gray-800">{title}</div>
          <div className="text-xs text-gray-500 font-mono">{url}</div>
        </div>
        
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
            Level {level + 1}
          </span>
        </div>
      </div>
      
      {hasChildren && isExpanded && (
        <div className="ml-2 border-l-2 border-amber-200">
          {children.map((child, idx) => (
            <SitemapNode key={idx} {...child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const StayraSitemap = () => {
  const sitemap = [
    {
      icon: Home,
      title: "Homepage",
      url: "/",
      children: [
        {
          icon: Sparkles,
          title: "Hero Section",
          url: "/#hero",
          children: []
        },
        {
          icon: Building2,
          title: "Property Showcase",
          url: "/#properties",
          children: []
        },
        {
          icon: Sparkles,
          title: "Experience Grid",
          url: "/#experience",
          children: []
        },
        {
          icon: FileText,
          title: "Instagram Feed",
          url: "/#instagram",
          children: []
        }
      ]
    },
    {
      icon: Building2,
      title: "Our Collection",
      url: "/properties",
      children: [
        {
          icon: Building2,
          title: "Choti Haveli",
          url: "/properties/choti-haveli",
          children: [
            {
              icon: FileText,
              title: "Gallery Section",
              url: "/properties/choti-haveli#gallery",
              children: []
            },
            {
              icon: FileText,
              title: "The Space",
              url: "/properties/choti-haveli#the-space",
              children: []
            },
            {
              icon: FileText,
              title: "Amenities",
              url: "/properties/choti-haveli#amenities",
              children: []
            },
            {
              icon: FileText,
              title: "Location",
              url: "/properties/choti-haveli#location",
              children: []
            }
          ]
        },
        {
          icon: Building2,
          title: "The Kukasola",
          url: "/properties/the-kukasola",
          children: [
            {
              icon: FileText,
              title: "Gallery Section",
              url: "/properties/the-kukasola#gallery",
              children: []
            },
            {
              icon: FileText,
              title: "The Space",
              url: "/properties/the-kukasola#the-space",
              children: []
            },
            {
              icon: FileText,
              title: "Amenities",
              url: "/properties/the-kukasola#amenities",
              children: []
            },
            {
              icon: FileText,
              title: "Location",
              url: "/properties/the-kukasola#location",
              children: []
            }
          ]
        }
      ]
    },
    {
      icon: Sparkles,
      title: "The Stayra Experience",
      url: "/experience",
      children: [
        {
          icon: FileText,
          title: "Curated Interiors",
          url: "/experience#interiors",
          children: []
        },
        {
          icon: FileText,
          title: "Private Sanctuaries",
          url: "/experience#privacy",
          children: []
        },
        {
          icon: FileText,
          title: "24/7 Concierge",
          url: "/experience#concierge",
          children: []
        },
        {
          icon: FileText,
          title: "Bespoke Services",
          url: "/experience#services",
          children: []
        }
      ]
    },
    {
      icon: Info,
      title: "About Us",
      url: "/about",
      children: [
        {
          icon: FileText,
          title: "Our Story",
          url: "/about#story",
          children: []
        },
        {
          icon: FileText,
          title: "Our Philosophy",
          url: "/about#philosophy",
          children: []
        },
        {
          icon: FileText,
          title: "Meet the Team",
          url: "/about#team",
          children: []
        }
      ]
    },
    {
      icon: PlusCircle,
      title: "List Your Property",
      url: "/list-property",
      children: [
        {
          icon: FileText,
          title: "Partner Benefits",
          url: "/list-property#benefits",
          children: []
        },
        {
          icon: FileText,
          title: "Requirements",
          url: "/list-property#requirements",
          children: []
        },
        {
          icon: Mail,
          title: "Contact Form",
          url: "/list-property#contact",
          children: []
        }
      ]
    },
    {
      icon: Mail,
      title: "Contact",
      url: "/contact",
      children: [
        {
          icon: FileText,
          title: "Get in Touch",
          url: "/contact#form",
          children: []
        },
        {
          icon: FileText,
          title: "Office Locations",
          url: "/contact#locations",
          children: []
        }
      ]
    },
    {
      icon: Shield,
      title: "Legal Pages",
      url: "/legal",
      children: [
        {
          icon: FileText,
          title: "Privacy Policy",
          url: "/privacy-policy",
          children: []
        },
        {
          icon: FileText,
          title: "Terms of Service",
          url: "/terms-of-service",
          children: []
        },
        {
          icon: FileText,
          title: "Cookie Policy",
          url: "/cookie-policy",
          children: []
        },
        {
          icon: FileText,
          title: "Cancellation Policy",
          url: "/cancellation-policy",
          children: []
        }
      ]
    }
  ];

  const [activeView, setActiveView] = useState('visual');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
              <Building2 className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Stayra Luxury Rentals</h1>
              <p className="text-gray-600">Complete Website Sitemap & Architecture</p>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveView('visual')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeView === 'visual'
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-amber-50'
            }`}
          >
            Visual Sitemap
          </button>
          <button
            onClick={() => setActiveView('xml')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeView === 'xml'
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-amber-50'
            }`}
          >
            XML Structure
          </button>
        </div>

        {/* Visual Sitemap */}
        {activeView === 'visual' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-amber-100">
            <div className="mb-4 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Site Structure</h2>
              <p className="text-sm text-gray-600 mt-1">Click on items to expand/collapse sections</p>
            </div>
            
            <div className="space-y-1">
              {sitemap.map((node, idx) => (
                <SitemapNode key={idx} {...node} />
              ))}
            </div>

            {/* Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">7</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Main Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">2</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">25+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Total URLs</div>
              </div>
            </div>
          </div>
        )}

        {/* XML View */}
        {activeView === 'xml' && (
          <div className="bg-gray-900 rounded-2xl shadow-xl p-6 border border-amber-100 overflow-x-auto">
            <pre className="text-green-400 text-sm font-mono leading-relaxed">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>https://stayra.in/</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Property Listing Page -->
  <url>
    <loc>https://stayra.in/properties</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Individual Properties -->
  <url>
    <loc>https://stayra.in/properties/choti-haveli</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://stayra.in/properties/the-kukasola</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Main Pages -->
  <url>
    <loc>https://stayra.in/experience</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://stayra.in/about</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://stayra.in/list-property</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://stayra.in/contact</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- Legal Pages -->
  <url>
    <loc>https://stayra.in/privacy-policy</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://stayra.in/terms-of-service</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://stayra.in/cookie-policy</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>https://stayra.in/cancellation-policy</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>`}
            </pre>
          </div>
        )}

        {/* SEO Notes */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <Info size={20} />
            SEO & Technical Notes
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Priority Scoring:</strong> Homepage (1.0), Properties (0.8-0.9), Main pages (0.6-0.7), Legal (0.3)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Change Frequency:</strong> Properties update monthly, legal pages yearly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Canonical URLs:</strong> All property pages should have self-referencing canonical tags</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Dynamic Sitemap:</strong> Auto-generate from Sanity CMS when new properties are added</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StayraSitemap;
