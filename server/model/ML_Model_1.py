#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.neighbors import KNeighborsRegressor
from sklearn import tree
from sklearn.model_selection import train_test_split


# In[2]:


data = pd.read_excel("./Energy_Datanewer.xls")


# In[3]:


x = data[['Not Renovated','Renovated', 'All Cafe', 'No All Cafe', 'Food Place', 'No Food Place', 'Kudsan', 'No Kudsan', 'Fix-Speed', 'Inverter', 'Sale area', 'Back area','All area', 'Shelf', 'VAULT', 'Opentype 0.9 m', 'Opentype 1.92 m', 'Rice box', 'Rice box panel']]
y = data.iloc[:,20:77]
train_x, test_x, train_y, test_y = train_test_split(x,y,test_size=0.2, random_state=99)


# In[4]:


Treemodel = tree.DecisionTreeRegressor(max_depth = 7, max_features = 7, random_state = 10)
Treemodel = Treemodel.fit(train_x, train_y)
Treescore = Treemodel.score(test_x,test_y)


# In[5]:


#Predict electric usage for an entire month
#For real usage, test_x will be changed to specific branch data including topics in "x"
trained_tree = Treemodel.predict(test_x)


# In[6]:


amount = data.iloc[:,20:77]
cost = data.iloc[:,77:134]
train_amount, test_amount, train_cost, test_cost = train_test_split(amount,cost,test_size=0.2, random_state=99)


# In[7]:


KNNmodel = KNeighborsRegressor(n_neighbors = 11, weights = 'distance')
KNNmodel = KNNmodel.fit(train_amount, train_cost)
KNNscore = KNNmodel.score(test_amount, test_cost)


# In[8]:


#Predict electric cost for an entire month
#In real usage, test_amount will be changed to predicted data from "trained_tree"
trained_knn = KNNmodel.predict(test_amount)

