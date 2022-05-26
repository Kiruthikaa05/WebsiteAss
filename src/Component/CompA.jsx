import React from 'react';
import{context,consume} from '../App'


function CompA() {
  return (
    <div className='CompA'>
        <context.Consumer>
            {user=>{
                return(
                    <consume.Consumer>
                        {
                        description=>{
                            return(
                                <div>
                                {user},{description}
                                </div>
                            
                            
                        )}
                            }
                    </consume.Consumer>
                )}
            }
        </context.Consumer>
    </div>
  )
}

export default CompA