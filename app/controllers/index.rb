get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/data' do
	generator = DataGenerator.new
	data = generator.retrieve_data(LOCALITY_OF_ORIGIN["China"])
	labels = data.keys.reverse
	values = data.values.reverse
	[labels, values].to_json
end