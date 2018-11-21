import React, {Component} from 'react';
import ItemsPerCategory from './ItemsPerCategory';

class AllItems extends Component{
    render(){
        const {listItems} = this.props;
		console.log("item: ", listItems);
		let term = this.props.searchTerm;
		console.log("term : ", term)
		if (term == ""){
			return(
				<div className="container">
                   
				</div>
			)
		}else{
			return(
				<div className="container text-center" style={{marginBottom: 90}}>
                    
                    <h4 style={{marginTop: 90, marginBottom: 90}}><strong>Search Results</strong></h4>
					
                    <div className="row">
					{listItems
						.filter((item)=>{return item.title.toLowerCase().includes(term.toLowerCase()) == term.toLowerCase().includes(term.toLowerCase())})
						.map((item, key) => {
							console.log('test search')
							return(
								<ItemsPerCategory
                                id={item.id}
                                key={key}
                                title={item.title}
                                studio={item.studio}
                                category={item.category}
                                price={item.price}
                                stock={item.stock}
                                url_picture={item.url_picture}
                                pelapak_id={item.pelapak_id}
								/>			
								);
						})
					}

					</div>
				</div>
			)
		}
    }
}

export default AllItems;