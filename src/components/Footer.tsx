import React from 'react';
import { Smartphone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    legal: [
      { name: 'Conditions Générales d\'Utilisation', href: '/cgu.html' },
      { name: 'Politique de Confidentialité', href: '/confidentialite.html' },
      { name: 'Mentions Légales', href: '/mentions-legales.html' },
      { name: 'Cookies', href: '/cookies.html' }
    ],
    support: [
      { name: 'Centre d\'Aide', href: '#faq' },
      { name: 'Nous Contacter', href: 'mailto:contact@usemy.fr?subject=Contact%20USEMY' },
      { name: 'Signaler un Problème', href: 'mailto:contact@usemy.fr?subject=Signalement%20de%20probl%C3%A8me%20USEMY' },
      { name: 'Suggestions', href: 'mailto:contact@usemy.fr?subject=Suggestions%20pour%20USEMY' }
    ],
    company: [
      { name: 'À Propos', href: '#features' },
      { name: 'Carrières', href: 'mailto:contact@usemy.fr?subject=Candidature%20spontan%C3%A9e%20USEMY' },
      { name: 'Presse', href: 'mailto:contact@usemy.fr?subject=Contact%20Presse%20USEMY' },
      { name: 'Blog', href: 'https://usemy.fr/blog' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-cyan-500 to-pink-500 p-3 rounded-xl">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                USEMY
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
            USEMY – La plateforme de mise en relation professionnelle qui simplifie votre quotidien.
            Trouvez le professionnel idéal en quelques clics, rapidement et facilement. 
              
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a 
                  href="mailto:contact@usemy.fr" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  contact@usemy.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">Paris, France</span>
              </div>
            </div>

          </div>

          {/* Legal links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Légal</h4>
            <div className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Support links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Support</h4>
            <div className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-pink-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white">Entreprise</h4>
            <div className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2025 USEMY. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">Service disponible</span>
              </div>
              <div className="text-gray-400 text-sm">
                Made with ❤️ in France
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;