from bambi import Model, Prior
import pandas as pd
import matplotlib.pyplot as plt
from pymc3 import traceplot

# Read in a tab-delimited file containing our data
data = pd.read_table('my_data_final_test.txt', sep='\t')

# Initialize the model
model = Model(data)
#model.add_intercept()
subject_prior = Prior('Cauchy', mu=0., b=10)
my_favorite_prior = Prior('Laplace', mu=0., b=10)
#model.add('gesture', prior=my_favorite_prior)
#model.add('dist')
#model.add('shading')
#model.add_term('dist')
#model.add_term('color')
#model.add_term('shading')
#model.add_y('y')
#model.add('y ~ 0')
#results = model.fit()
priors = {'gesture + dist + shading': subject_prior}
results = model.fit('y ~ gesture + dist + shading', priors=priors)
#results = model.fit()
#results.plot(500)
#results.summary()
results.plot()
#results.names
#traceplot(results)
plt.show()
#names = ['b_Intercept', 'b_gesture', 'b_dist', 'b_color', 'b_shading', 'y_sd']
#results.summary(100, names=names)
