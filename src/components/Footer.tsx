const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 mt-20">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} INSECOM. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
