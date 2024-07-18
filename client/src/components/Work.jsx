import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const WorkContainer = styled.div`
  width: 100vw;
  padding: 2rem 6rem;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const Work = () => {
  const data = [
    {
      image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      image: 'https://picsum.photos/800/300',
      title: 'Title 2',
      description: 'Description 2'
    },
    {
      image: 'https://picsum.photos/800/300',
      title: 'Title 3',
      description: 'Description 3'
    },
    {
      image: 'https://picsum.photos/800/300',
      title: 'Title 4',
      description: 'Description 4'
    },
    {
      image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      image: 'https://picsum.photos/800/300',
      title: 'Title 5',
      description: 'Description 5'
    },
    {
      image: 'https://picsum.photos/800/300',
      title: 'Title 6',
      description: 'Description 6'
    }
  ]
  return (
    <>
      <WorkContainer>

        {
          data.map((item, index) => {
            return (
              <Card
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            )
          })
        }

      </WorkContainer>
    </>
  )
}

export default Work