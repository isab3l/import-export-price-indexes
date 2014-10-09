require 'rest-client'

IMPORTS = {
	"All Commodities" => "EIUIR",
	"Petroleum and Petroleum Products" => "EIUIR100",
	"All Imports Excluding Petroleum" => "EIUIREXPET",
	"All Imports Excluding Fuels" => "EIUIREXFUELS",
}
EXPORTS = {
	"All Commodities" => "EIUIQ",
 	"Agricultural Commodities" => "EIUIQAG",
 	"Nonagricultural Commodities" => "EIUIQEXAG"
}
LOCALITY_OF_ORIGIN = {
	 "Industrialized Countries" => "EIUCOINDUSTOT",
	 "Other Countries" => "EIUCOOTHERTOT",
	 "Canada" => "EIUCOCANTOT",
	 "European Union" => "EIUCOEECTOT",
	 "France" => "EIUCOFRNTOT",
	 "Germany" => "EIUCOGERTOT",
	 "United Kingdom" => "EIUCOUKTOT",
	 "Latin America" => "EIUCOLATTOT",
	 "Mexico" => "EIUCOMEXTOT",
	 "Pacific Rim" => "EIUCOPRIMTOT",
	 "China" => "EIUCOCHNTOT",
	 "Japan" => "EIUCOJPNTOT"	
}


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