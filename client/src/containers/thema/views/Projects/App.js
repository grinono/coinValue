// import React, { Component } from 'react'
// import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch'
//
// import Header from './components/Header'
// import Results from './components/Results'
//
// import theme from './theme'
// // import './App.css'
//
// class App extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			currentTopics: [],
// 		}
// 	}
//
// 	setTopics (currentTopics) {
// 		this.setState({
// 			currentTopics: currentTopics || [],
// 		})
// 	}
//
// 	toggleTopic (topic) {
// 		const { currentTopics } = this.state
// 		const nextState = currentTopics.includes(topic)
// 			? currentTopics.filter(item => item !== topic)
// 			: currentTopics.concat(topic)
// 		this.setState({
// 			currentTopics: nextState,
// 		})
// 	}
//
// 	render() {
// 		return (
// 			<section className='container'>
// 				<ReactiveBase
// 					app='coincheck'
// 					credentials='UEaquBPZj:4e0025c5-7661-4b74-b801-4308066463d4'
// 					type='projects'
// 					theme={theme}
// 				>
// 					<p>hallo</p>
// 					{console.log(this)}
// 					<div className='flex row-reverse app-container'>
// 						{/* <Header currentTopics={this.state.currentTopics} setTopics={() => this.setTopics()} /> */}
// 						<div className='results-container'>
// 							<DataSearch
// 							  componentId="mainSearch"
// 							  dataField={["original_title", "authors"]}
// 							  queryFormat="and"
// 								URLParams={true}
// 							/>
// 							{/* <DataSearch
// 								componentId='repo'
// 								filterLabel='Search'
// 								dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
// 								placeholder='Search Coins'
// 								iconPosition='left'
// 								autosuggest={false}
// 								URLParams
// 								className='data-search-container results-container'
// 								innerClass={{
// 									input: 'search-input'
// 								}}
// 							/> */}
// 							{/* <Results currentTopics={this.state.currentTopics} toggleTopic={() => this.toggleTopic} /> */}
// 						</div>
// 					</div>
// 				</ReactiveBase>
// 			</section>
// 		)
// 	}
// }
//
// export default App

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
	ReactiveBase,
	DataSearch,
	ResultList,
	SelectedFilters,
} from '@appbaseio/reactivesearch';

// import './index.css';

export default class Main extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
			>
				<div className="row">
					<div className="col">
						<DataSearch
							title="DataSearch"
							dataField={['original_title', 'original_title.search']}
							categoryField="authors.raw"
							componentId="BookSensor"
						/>
					</div>

					<div className="col">
						<SelectedFilters componentId="BookSensor" />
						<ResultList
							componentId="SearchResult"
							dataField="original_title"
							size={10}
							onData={this.onData}
							className="result-list-container"
							pagination
							react={{
								and: 'BookSensor',
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}

	onData(data) {
		return ({
			title: <div className="book-title" dangerouslySetInnerHTML={{ __html: data.original_title }} />,
			description: (
				<div className="flex column justify-space-between">
					<div>
						<div>by <span className="authors-list">{data.authors}</span></div>
						<div className="ratings-list flex align-center">
							<span className="stars">
								{
									Array(data.average_rating_rounded).fill('x')
										.map((item, index) => <i className="fas fa-star" key={index} />) // eslint-disable-line
								}
							</span>
							<span className="avg-rating">({data.average_rating} avg)</span>
						</div>
					</div>
					<span className="pub-year">Pub {data.original_publication_year}</span>
				</div>
			),
			image: data.image,
		});
	}
}
