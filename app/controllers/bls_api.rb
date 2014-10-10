require 'rest-client'

class DataGenerator

	def initialize(url='http://api.bls.gov/publicAPI/v1/timeseries/data/')
		@url = url
	end

	def retrieve_data(series)
		response = RestClient.get(@url+series)
		graph_data = {}
		api_data = JSON(response)["Results"]["series"][0]["data"]
		api_data.each do |result|
			time = result["periodName"] + " " + result["year"]
			index = result["value"]
			graph_data[time] = index
		end
		graph_data
	end

end