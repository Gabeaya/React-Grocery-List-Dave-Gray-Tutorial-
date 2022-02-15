import React from 'react'

const Footer = ({length}) => {
  const today = new Date();
  return (
    <footer> 
      <p>
        {length === 0 ? 'No' : length} List {length === 1 ? 'Item' : 'Items'} | Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}
export default Footer;