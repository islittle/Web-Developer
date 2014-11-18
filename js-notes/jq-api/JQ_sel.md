jQuery 选择器   wangfeng 创建
<table>
		<tr>
			<th>选择器</th>
			<th>实例</th>
			<th>选取</th>
		</tr>
		<tr>
			<td>*</td>
			<td>$("*")</td>
			<td>所有元素</td>
		</tr>
		<tr>
			<td>#id</td>
			<td>$("#lastname")</td>
			<td>id="lastname"的元素</td>
		</tr>
		<tr>
			<td>.class</td>
			<td>$(".intro")</td>
			<td>所有class="intro"的元素</td>
		</tr>
		<tr>
			<td>element</td>
			<td>$("p")</td>
			<td>所有 &lt;p&gt; 元素</td>
		</tr>
		<tr>
			<td>.class.class</td>
			<td>$(".intro.demo")</td>
			<td>所有 class="intro" 且 class="demo" 的元素</td>
		</tr>
		<tr>
			<td>:first</td>
			<td>$("p:first")</td>
			<td>第一个 &lt;p&gt; 元素</td>
		</tr>
		<tr>
			<td>:last</td>
			<td>$("p:last")</td>
			<td>最后一个 &lt;p&gt; 元素</td>
		</tr>
		<tr>
			<td>:even</td>
			<td>$("tr:even")</td>
			<td>所有偶数 &lt;tr&gt; 元素</td>
		</tr>
		<tr>
			<td>:odd</td>
			<td>$("tr:odd")</td>
			<td>所有奇数 &lt;tr&gt; 元素</td>
		</tr>
		<tr>
			<td>:eq(index)</td>
			<td>$("ul li:eq(3)")</td>
			<td>列表中的第四个元素（index 从 0 开始）</td>
		</tr>
		<tr>
			<td>:gt(no)</td>
			<td>$("ul li:gt(3)")</td>
			<td>列出 index 大于 3 的元素</td>
		</tr>
		<tr>
			<td>:lt(no)</td>
			<td>$("ul li:lt(3)")</td>
			<td>列出 index 小于 3 的元素</td>
		</tr>
		<tr>
			<td>:not(selector)</td>
			<td>$("input:not(:empty)")</td>
			<td>所有不为空的 input 元素</td>
		</tr>
		<tr>
			<td>:header</td>
			<td>$(":header")</td>
			<td>所有标题元素 &lt;h1&gt; - &lt;h6&gt;</td>
		</tr>
		<tr>
			<td>:animated</td>
			<td>$(":animated")</td>
			<td>所有动画元素</td>
		</tr>
		<tr>
			<td>:contains(text)</td>
			<td>$(":contains('little')")</td>
			<td>包含指定字符串 little 的所有元素</td>
		</tr>
		<tr>
			<td>:empty</td>
			<td>$(":empty")</td>
			<td>无子（元素）节点的所有元素</td>
		</tr>
		<tr>
			<td>:hidden</td>
			<td>$("p:hidden")</td>
			<td>所有隐藏的 &lt;p&gt; 元素</td>
		</tr>
		<tr>
			<td>:visible</td>
			<td>$("table:visible")</td>
			<td>所有可见的表格</td>
		</tr>
		<tr>
			<td>s1,s2,s3</td>
			<td>$("th,td,.intro")</td>
			<td>所有带有匹配选择的元素</td>
		</tr>
		<tr>
			<td>[attribute]</td>
			<td>$("[href]")</td>
			<td>所有带有 href 属性的元素</td>
		</tr>
		<tr>
			<td>[attribute=value]</td>
			<td>$("[href='#']")</td>
			<td>所有 href 属性的值等于 "#" 的元素</td>
		</tr>
		<tr>
			<td>[attribute!=value</td>
			<td>$("[href!='#']")</td>
			<td>所有 href 属性的值不等于 "#" 的元素</td>
		</tr>
		<tr>
			<td>[attribute$=value]</td>
			<td>$("[href$='.jpg']")</td>
			<td>所有 href 属性的值包含以 ".jpg" 结尾的元素</td>
		</tr>
		<tr>
			<td>:input</td>
			<td>$(":input")</td>
			<td>所有 &lt;input&gt; 元素</td>
		</tr>
		<tr>
			<td>:text,:password,:radio,<br/>:checkbox,:submit,:reset,<br/>:button,:image,:file</td>
			<td>$(":seltect")</td>
			<td>所有 type="seltect" 的 &lt;input&gt; 元素</td>
		</tr>
		<tr>
			<td>:enabled</td>
			<td>$(":enabled")</td>
			<td>所有激活的 input 元素</td>
		</tr>
		<tr>
			<td>:disabled</td>
			<td>$(":disabled")</td>
			<td>所有禁用的 input 元素</td>
		</tr>
		<tr>
			<td>:selected</td>
			<td>$(":selected")</td>
			<td>所有被选取的 input 元素</td>
		</tr>
		<tr>
			<td>:checked</td>
			<td>$(":checked")</td>
			<td>所有被选中的 input 元素</td>
		</tr>
	</table>
