const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-transparent">
      <div className="container mx-auto flex justify-between px-4 pt-3 pb-4">
        <p>
          Made with ❤️ by{' '}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.athimannil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Athimannil
          </a>
        </p>
        <span>
          &copy; {new Date().getFullYear()} TutorView &mdash; All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
