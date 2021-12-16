#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns
import statsmodels.api as sm
from sklearn.neighbors import KNeighborsRegressor
from sklearn import tree
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.feature_selection import RFE
from sklearn.linear_model import RidgeCV, LassoCV, Ridge, Lasso


# In[2]:


pd.set_option("display.max_columns", 999)
pd.set_option("display.max_rows", 999)
pd.options.display.float_format = '{:,.10f}'.format


# In[3]:


data = pd.read_excel("Energy_Datanewest.xls")
first_part = data[['Not Renovated','Renovated', 'All Cafe', 'No All Cafe', 'Food Place', 'No Food Place', 'Kudsan', 'No Kudsan', 'Fix-Speed', 'Inverter', 'Sale area', 'Back area','All area', 'Shelf', 'VAULT', 'Opentype 0.9 m', 'Opentype 1.92 m', 'Rice box', 'Rice box panel']]
second_part = data.iloc[:,144:]


# In[4]:


x = pd.concat([first_part, second_part], axis=1)
y = data.iloc[:,20:77]
train_x, test_x, train_y, test_y = train_test_split(x,y,test_size=0.2, random_state=99)


# In[5]:


Treemodel = tree.DecisionTreeRegressor(max_depth = 6, max_features = 7, random_state = 10)
Treemodel = Treemodel.fit(train_x, train_y)
Treescore = Treemodel.score(test_x,test_y)
Treescore


# In[6]:


#Predict electric usage for an entire month
#For real usage, x will be changed to specific branch data including topics in "x"
#To display data for selected branch, change 0 to that branch index
trained_tree = Treemodel.predict(x)
trained_tree[0]


# In[7]:


amount = data.iloc[:,20:77]
cost = data.iloc[:,77:134]
train_amount, test_amount, train_cost, test_cost = train_test_split(amount,cost,test_size=0.2, random_state=99)


# In[8]:


KNNmodel = KNeighborsRegressor(n_neighbors = 11, weights = 'distance')
KNNmodel = KNNmodel.fit(train_amount, train_cost)
KNNscore = KNNmodel.score(test_amount, test_cost)
KNNscore


# In[9]:


#Predict electric cost for an entire month
#In real usage, amount will be changed to predicted data from "trained_tree"
#To display data for selected branch, change 0 to that branch index
trained_knn = KNNmodel.predict(amount)
trained_knn[0]


# In[10]:


for k in range(2790):
    for l in range(57):
        if second_part.iloc[k,l] == 0:
            trained_tree[k,l] = 0


# In[11]:


#Efficiency Score
true_amount = data.iloc[:,20:77]
true_amount = true_amount.to_numpy()
trained_tree = np.where(trained_tree == 0, 1, trained_tree)
trained_tree = trained_tree.astype('int64')
percentage = ((true_amount - trained_tree)*100)/trained_tree
percentage = np.nan_to_num(percentage,nan=0)


# In[12]:


#Max efficiency score is 10.00.
#To display data for selected branch and month, change 0,56 to that branch index and that month column.
efficiency_score = 10-(percentage/10)
efficiency_score = efficiency_score/efficiency_score.max()*10
efficiency_score[0,56] #Display Sep_2021 data for branch number 1


# In[13]:


sep2021_amount = y.iloc[:,56]
sep2021_amount = sep2021_amount.to_numpy()
factor = x.to_numpy()
factor = factor.astype('int')


# In[14]:


X_1 = sm.add_constant(x)
#Fitting sm.OLS model
model = sm.OLS(sep2021_amount,X_1).fit()
p_values = model.pvalues


# In[15]:


p_values = p_values.iloc[1:20]
p_values = p_values.sort_values(ascending=True)
affect = p_values.drop(['Sale area','Back area','All area'])


# In[16]:


affect


# In[ ]:




