export default function Select({ options, name, handleChange }) {
  return (
    <select
      name={name}
      onChange={handleChange}
      className='w-24 border border-black h-8 rounded text-black text-center'
    >
      {options.map((option, index) => {
        return (
          <option key={`${option}-${index}`} value={option}>
            {option}
          </option>
        )
      })}
    </select>
  )
}
