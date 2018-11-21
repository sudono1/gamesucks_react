import React, { Component } from "react";
import ItemsPerCategory from "./ItemsPerCategory";

class Categories extends Component {

	render () {
	const {listItems} = this.props;
	return (
		<div id='Categories' style={{marginTop: 40}}>

			<div className="container">

				<ul className="nav nav-tabs nav-justified" id="myTab" role="tablist" style={{marginTop: 30}}>
					<li className="nav-item">
						<a className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" role="tab" aria-controls="home"
							aria-selected="true">Action</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" role="tab" aria-controls="profile"
							aria-selected="false">RPG</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" role="tab" aria-controls="contact"
							aria-selected="false">Sports</a>
					</li>
				</ul>

				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

						<div className="container" style={{marginTop: 30}}>
							<div className="row">

								{listItems.filter((e) => {return e.category === "1"}).map((item, key) => {
										return (
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
									})}
							</div>
						</div>

					</div>

					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						<div className="container" style={{marginTop: 30}}>
							<div className="row">

								{listItems.filter((e) => {return e.category === "2"}).map((item, key) => {
										return (
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
									})}

							</div>
						</div>
					</div>

					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						<div className="container" style={{marginTop: 30}}>
							<div className="row">

								{listItems.filter((e) => {return e.category === "3"}).map((item, key) => {
										return (
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
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)}
}

export default Categories