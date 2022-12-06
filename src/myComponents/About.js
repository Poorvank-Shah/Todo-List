import React from 'react'

export const About = () => {
  let aboutStyle = {
    minHeight : '76vh',
    margin : '38px auto',
  }
  return (
    <div className='container' style={aboutStyle}>
        <h3>This is an About Component</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed autem neque aspernatur, magni facilis fugiat natus ab minus blanditiis ipsa, architecto quod placeat, omnis ratione excepturi eos ad libero distinctio atque? Mollitia in qui esse debitis repellendus laboriosam voluptatem quas iusto modi, illo tempora fuga odio omnis voluptas sapiente?
        </p>
    </div>
  )
}
