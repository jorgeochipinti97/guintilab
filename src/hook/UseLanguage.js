import { useState, useEffect } from 'react';

// Hook personalizado que detecta el idioma del localStorage
const useLanguage = () => {
  const [language, setLanguage] = useState('en'); // Estado por defecto

  useEffect(() => {
    // Función para obtener el idioma del localStorage
    const getLanguage = () => {
      const storedLanguage = localStorage.getItem('language');
      // Verifica si el idioma almacenado es 'en' o 'es'
      return storedLanguage === 'es' ? 'es' : 'en';
    };

    setLanguage(getLanguage()); // Actualiza el estado con el idioma obtenido

    // Opcional: Escuchar cambios en el localStorage
    const handleStorageChange = () => {
      setLanguage(getLanguage());
    };

    // Agregar evento para escuchar cambios en el localStorage
    window.addEventListener('storage', handleStorageChange);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez

  return language;
};

export default useLanguage;
