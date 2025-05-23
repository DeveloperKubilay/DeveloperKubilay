const SectionHeader = ({ subtitle, title }) => (
  <>
    <h2 className="text-center mb-2 mt-4 sm:mt-5 text-lg sm:text-2xl text-gray-500 shadow-sm">{subtitle}</h2>
    <h1 className="text-center mt-3 sm:mt-5 text-3xl sm:text-5xl font-black shadow-md">{title}</h1>
  </>
);

export default SectionHeader;