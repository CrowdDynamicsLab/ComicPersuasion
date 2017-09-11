import matplotlib.pyplot as plt; plt.rcdefaults()
import numpy as np
import matplotlib.pyplot as plt
import pymc3
'''
objects = ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10')
objects2 = ('-5', '-4', '-3', '-2','-1', '0', '1', '2', '3', '4', '5')
y_pos = np.arange(len(objects2))
performance2 = [0,1,7,11,12,23,16,17,9,4,4]
performance3 = [0,1,4,8,4,15,14,16,9,3,4]
performance = [0,0,3,3,8,8,2,1,0,1,0]
performance4 = [1,2,8,18,17,9,19,20,17,8,11]
plt.bar(y_pos, performance4, align='center', alpha=1)
plt.xticks(y_pos, objects2)
plt.ylabel('Freq')
plt.title('Score Distribution')
'''
s = np.random.uniform(-5,5,1000)
count, bins, ignored = plt.hist(s, 15, normed=True)
plt.plot(bins, np.ones_like(bins), linewidth=2, color='r')
with pm.Model():
    mu = pm.Normal('mu', 0, 1)
    sigma = 1.
    returns = pm.Normal('returns', mu=mu, sd=sigma, observed=observed_data)

    step = pm.NUTS()
    trace = pm.sample(15000, step)

sns.distplot(trace[-5000:]['mu'], label='PyMC3');
plt.legend()
plt.show()
